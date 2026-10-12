import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';

export const metadata: Metadata = { title: 'Admin', robots: { index: false, follow: false } };

const ERRORS: Record<string, string> = {
  denied: 'That Google account isn’t allowed to use the back office.',
  state: 'Sign-in expired or was interrupted. Please try again.',
  google: 'Google sign-in failed. Please try again.',
  config: 'Google sign-in isn’t configured yet.',
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await isAdmin()) redirect('/admin');
  const { error } = await searchParams;
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--bg)', padding: '1rem' }}>
      <div className="card" style={{ width: 'min(100%, 380px)', padding: '2rem', borderRadius: '20px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-dark.png" alt="Nexxra Digital" style={{ height: '48px', width: 'auto', marginBottom: '1.25rem' }} />
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>Back office</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>Invoices & settings for the Nexxra team.</p>
        {error && <p role="alert" style={{ fontSize: '0.85rem', color: '#b91c1c', background: '#fdecec', borderRadius: '10px', padding: '0.6rem 0.8rem', marginBottom: '1rem' }}>{ERRORS[error] ?? ERRORS.google}</p>}
        {/* A plain link (not next/link): this is a full-page redirect to Google. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/google" className="btn-ghost" style={{ width: '100%', minHeight: '48px', gap: '0.65rem' }}>
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
          Continue with Google
        </a>
        <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', marginTop: '1rem', textAlign: 'center' }}>Only approved Nexxra accounts can sign in.</p>
      </div>
    </main>
  );
}
