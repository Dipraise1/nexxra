import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/forms/PageShell';
import JsonLd, { breadcrumbs } from '@/components/seo/JsonLd';
import { GUIDES } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guides — Websites, Apps & Software in Nigeria',
  description: 'Practical guides for Nigerian businesses on website costs, hiring developers, apps, SEO and digital growth, from the Nexxra Digital team in Abuja.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }])} />
      <section className="sec">
        <div className="container-center" style={{ maxWidth: '50rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '1rem' }}>Guides for Nigerian businesses</h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '2.5rem' }}>Straight answers on building websites, apps and software in Nigeria — costs, hiring and getting found online.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card" style={{ display: 'block' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>{g.title}</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>{g.description}</p>
                <span style={{ fontSize: '0.8125rem', color: 'var(--ink-3)' }}>{g.readMins} min read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
