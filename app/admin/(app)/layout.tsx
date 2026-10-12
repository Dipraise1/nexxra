import type { Metadata } from 'next';
import Link from 'next/link';
import { requireAdmin, adminEmail } from '@/lib/admin-auth';
import { logout, newInvoice } from '../actions';

export const metadata: Metadata = { title: { default: 'Admin', template: '%s · Admin' }, robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  const email = await adminEmail();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <header className="no-print dash-bottom" style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(228,226,220,0.9)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.png" alt="Nexxra" style={{ height: '38px', width: 'auto' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Back office</span>
          </Link>
          <nav style={{ display: 'flex', gap: '1.1rem', marginLeft: 'auto', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500 }}>
            <Link href="/admin" style={{ color: 'var(--ink-2)' }}>Invoices</Link>
            <Link href="/admin/settings" style={{ color: 'var(--ink-2)' }}>Settings</Link>
            <form action={newInvoice}><button className="btn-primary" style={{ minHeight: '38px', padding: '0 1.1rem', fontSize: '0.8125rem' }}>+ New invoice</button></form>
            <form action={logout}><button title={email ?? ''} style={{ background: 'none', border: 'none', color: 'var(--ink-3)', cursor: 'pointer', fontSize: '0.8125rem', fontFamily: 'inherit' }}>Sign out</button></form>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '2rem 1rem 4rem' }}>{children}</main>
    </div>
  );
}
