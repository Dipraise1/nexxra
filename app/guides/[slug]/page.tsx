import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/forms/PageShell';
import JsonLd, { SITE, BUSINESS_ID, breadcrumbs, faqPage } from '@/components/seo/JsonLd';
import { GUIDES, guideBySlug } from '@/lib/guides';
import { serviceBySlug } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  if (!g) return {};
  const url = `/guides/${g.slug}`;
  return {
    title: g.metaTitle,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: g.metaTitle, description: g.description, publishedTime: g.published, modifiedTime: g.updated, siteName: 'Nexxra Digital', locale: 'en_NG' },
    twitter: { card: 'summary_large_image', title: g.metaTitle, description: g.description },
  };
}

const body: React.CSSProperties = { fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '1rem' };

export default async function GuidePage({ params }: Props) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  const related = g.related.map(serviceBySlug).filter(Boolean);
  const date = new Date(`${g.updated}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  return (
    <PageShell>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: g.title,
        description: g.description,
        datePublished: g.published,
        dateModified: g.updated,
        mainEntityOfPage: `${SITE}/guides/${g.slug}`,
        author: { '@id': BUSINESS_ID },
        publisher: { '@id': BUSINESS_ID },
      }} />
      <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }, { name: g.title, path: `/guides/${g.slug}` }])} />
      <JsonLd data={faqPage(g.faqs)} />

      <article className="sec">
        <div className="container-center" style={{ maxWidth: '46rem' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link>
          </nav>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '1rem' }}>{g.title}</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '2rem' }}>Nexxra Digital · Updated {date} · {g.readMins} min read</p>
          {g.intro.map((p) => <p key={p.slice(0, 24)} style={body}>{p}</p>)}

          {g.blocks.map((b) => (
            <section key={b.h2} style={{ marginTop: '2.25rem' }}>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.65rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.9rem' }}>{b.h2}</h2>
              {b.p?.map((p) => <p key={p.slice(0, 24)} style={body}>{p}</p>)}
              {b.list && (
                <ul style={{ ...body, listStyle: 'disc', paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {b.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
              {b.after?.map((p) => <p key={p.slice(0, 24)} style={body}>{p}</p>)}
            </section>
          ))}

          <section style={{ marginTop: '2.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.65rem)', fontWeight: 700, marginBottom: '1rem' }}>Frequently asked questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {g.faqs.map((f) => (
                <details key={f.q} className="card" style={{ padding: '1.1rem 1.25rem' }}>
                  <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{f.q}</summary>
                  <p style={{ ...body, fontSize: '0.9375rem', marginTop: '0.75rem', marginBottom: 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="card" style={{ marginTop: '3rem', background: 'var(--dark)', color: '#fff', border: 'none', padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Want a fixed quote for your project?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1.25rem' }}>Book a free 30-minute call with our Abuja team — you&apos;ll get a written proposal within 48 hours.</p>
            <Link href="/book" className="btn-light">Book a free call</Link>
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: '2.5rem' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Related services</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {related.map((r) => <Link key={r!.slug} href={`/services/${r!.slug}`} className="btn-ghost" style={{ minHeight: '40px', fontSize: '0.85rem' }}>{r!.h1}</Link>)}
              </div>
            </div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
