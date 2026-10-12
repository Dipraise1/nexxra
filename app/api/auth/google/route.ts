import { randomBytes } from 'crypto';
import { NextResponse } from 'next/server';

// Step 1 of Google sign-in: send the browser to Google with a one-time state.
export async function GET(req: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) return NextResponse.redirect(new URL('/admin/login?error=config', req.url));
  const origin = new URL(req.url).origin;
  const state = randomBytes(24).toString('base64url');
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/auth/google/callback`,
    response_type: 'code',
    scope: 'openid email',
    state,
    prompt: 'select_account',
  }).toString();
  const res = NextResponse.redirect(url);
  res.cookies.set('nx_oauth_state', state, { httpOnly: true, secure: origin.startsWith('https'), sameSite: 'lax', path: '/api/auth/google', maxAge: 600 });
  return res;
}
