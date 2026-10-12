import Image from 'next/image';
import Link from 'next/link';

/** Minimal header/footer frame for standalone pages (booking, reviews). */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <header className="dash-bottom">
        <div className="container-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
          <Link href="/" aria-label="Nexxra Digital home">
            <Image src="/logo-dark.png" alt="Nexxra Digital" width={1536} height={1024} priority sizes="70px" style={{ height: '46px', width: 'auto', display: 'block' }} />
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.75rem, 3vw, 1.5rem)', fontSize: '0.875rem', fontWeight: 500 }}>
            <Link href="/services" style={{ color: 'var(--ink-2)' }}>Services</Link>
            <Link href="/guides" className="show-md" style={{ color: 'var(--ink-2)' }}>Guides</Link>
            <Link href="/#work" className="show-md" style={{ color: 'var(--ink-2)' }}>Work</Link>
            <Link href="/book" className="btn-primary" style={{ minHeight: '38px', padding: '0 1.1rem', fontSize: '0.8125rem' }}>Book a call</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>{children}</main>
      <footer className="dash-top">
        <div className="container-center" style={{ padding: '1.5rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--ink-3)' }}>
          <span>© {new Date().getFullYear()} Nexxra Tech Innovations Limited</span>
          <span>hey@nexxradigitals.com · +234 811 026 8093</span>
        </div>
      </footer>
    </div>
  );
}

export const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.625rem', fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '0.08em',
  color: 'var(--ink-3)', marginBottom: '0.5rem',
};

export const WHATSAPP = '2348110268093';
