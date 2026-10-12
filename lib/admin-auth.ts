import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Google sign-in, limited to an allowlist of emails (ADMIN_EMAILS, comma
// separated). A successful sign-in sets an HMAC-signed, httpOnly cookie that
// carries the email and an expiry. No user table: this is a one-team back office.
const COOKIE = 'nx_admin';
const TTL_S = 7 * 24 * 3600;

const DEFAULT_ADMINS = ['blackxgold7@gmail.com', 'raphealdivine2@gmail.com', 'hey@nexxradigitals.com'];

export function allowedEmails() {
  const raw = process.env.ADMIN_EMAILS;
  return (raw ? raw.split(',') : DEFAULT_ADMINS).map((e) => e.trim().toLowerCase()).filter(Boolean);
}
export const isAllowed = (email: string) => allowedEmails().includes(email.trim().toLowerCase());

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error('ADMIN_SESSION_SECRET is not configured');
  return s;
}
const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url');

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export async function startSession(email: string) {
  const payload = Buffer.from(JSON.stringify({ e: email.toLowerCase(), x: Math.floor(Date.now() / 1000) + TTL_S })).toString('base64url');
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: TTL_S,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

/** The signed-in admin's email, or null. Re-checks the allowlist so removing an email revokes access. */
export async function adminEmail(): Promise<string | null> {
  const v = (await cookies()).get(COOKIE)?.value;
  if (!v) return null;
  const [payload, mac] = v.split('.');
  if (!payload || !mac || !safeEqual(mac, sign(payload))) return null;
  try {
    const { e, x } = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { e: string; x: number };
    return x > Date.now() / 1000 && isAllowed(e) ? e : null;
  } catch {
    return null;
  }
}

export const isAdmin = async () => (await adminEmail()) !== null;

/** Gate for admin pages and server actions. */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect('/admin/login');
}
