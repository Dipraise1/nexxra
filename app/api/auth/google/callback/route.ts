import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { isAllowed, startSession } from '@/lib/admin-auth';

// Step 2: Google sends the user back with a code. Exchange it (server to
// server, with our client secret) for an ID token, then check the email.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const fail = (error: string) => NextResponse.redirect(new URL(`/admin/login?error=${error}`, url.origin));

  const jar = await cookies();
  const expected = jar.get('nx_oauth_state')?.value;
  jar.delete({ name: 'nx_oauth_state', path: '/api/auth/google' });
  const state = url.searchParams.get('state');
  const code = url.searchParams.get('code');
  if (!expected || !state || state !== expected || !code) return fail('state');

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID || '',
      client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
      redirect_uri: `${url.origin}/api/auth/google/callback`,
      grant_type: 'authorization_code',
    }),
  });
  if (!res.ok) {
    console.error('google token exchange failed', res.status, (await res.text()).slice(0, 300));
    return fail('google');
  }
  const { id_token } = (await res.json()) as { id_token?: string };
  // The token came straight from Google over TLS in exchange for our secret,
  // so its signature needn't be re-verified (OIDC Core §3.1.3.7); check claims.
  let claims: { aud?: string; iss?: string; email?: string; email_verified?: boolean; exp?: number } = {};
  try {
    claims = JSON.parse(Buffer.from(String(id_token).split('.')[1], 'base64url').toString());
  } catch {
    return fail('google');
  }
  const okIssuer = claims.iss === 'https://accounts.google.com' || claims.iss === 'accounts.google.com';
  if (!okIssuer || claims.aud !== process.env.GOOGLE_CLIENT_ID || !claims.email || !claims.email_verified || (claims.exp ?? 0) < Date.now() / 1000) {
    return fail('google');
  }
  if (!isAllowed(claims.email)) {
    console.warn('admin sign-in refused for', claims.email);
    return fail('denied');
  }
  await startSession(claims.email);
  return NextResponse.redirect(new URL('/admin', url.origin));
}
