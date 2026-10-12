import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/forms/PageShell';
import JsonLd, { SITE, BUSINESS_ID, breadcrumbs, faqPage } from '@/components/seo/JsonLd';
import { SERVICES, serviceBySlug } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  const url = `/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title: `${s.metaTitle} | Nexxra Digital`, description: s.metaDescription, siteName: 'Nexxra Digital', locale: 'en_NG' },
    twitter: { card: 'summary_large_image', title: s.metaTitle, description: s.metaDescription },
  };
}

const h2: React.CSSProperties = { fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' };
const body: React.CSSProperties = { fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.8 };

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const related = s.related.map(serviceBySlug).filter(Boolean);

  return (
    <PageShell>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.name,
        serviceType: s.name,
        description: s.metaDescription,
        url: `${SITE}/services/${s.slug}`,
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Abuja' }, { '@type': 'Country', name: 'Nigeria' }],
      }} />
      <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: s.name, path: `/services/${s.slug}` }])} />
      <JsonLd data={faqPage(s.faqs)} />

      <section className="sec dash-bottom">
        <div className="container-center">
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--ink-2)' }}>{s.name}</span>
          </nav>
          <div className="g-2" style={{ alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.06, marginBottom: '1.25rem' }}>{s.h1}</h1>
              {s.intro.map((p) => <p key={p.slice(0, 20)} style={{ ...body, marginBottom: '1rem' }}>{p}</p>)}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem' }}>
                <Link href="/book" className="btn-primary">Book a free call</Link>
                <Link href="/#contact" className="btn-ghost">Get a quote</Link>
              </div>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '22px', aspectRatio: '16 / 11' }}>
              <video src={s.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec dash-bottom">
        <div className="container-center">
          <h2 style={h2}>What&apos;s included</h2>
          <div className="g-3">
            {s.includes.map((it) => (
              <div key={it.title} className="card">
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{it.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dash-bottom">
        <div className="container-center g-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 style={h2}>Who it&apos;s for</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {s.forWho.map((w) => (
                <li key={w} style={{ display: 'flex', gap: '0.625rem', fontSize: '1rem', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>{w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={h2}>How we work</h2>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', ...body, fontSize: '1rem', listStyle: 'decimal', paddingLeft: '1.25rem' }}>
              <li><b style={{ color: 'var(--ink)' }}>Free discovery call</b> — goals, timeline and budget.</li>
              <li><b style={{ color: 'var(--ink)' }}>Fixed proposal within 48 hours</b> — scope, price and milestones.</li>
              <li><b style={{ color: 'var(--ink)' }}>Design first</b> — you approve before we build.</li>
              <li><b style={{ color: 'var(--ink)' }}>Build with weekly updates</b> on a live staging link.</li>
              <li><b style={{ color: 'var(--ink)' }}>Launch + 30 days free support.</b></li>
            </ol>
            <p style={{ ...body, fontSize: '0.9375rem', marginTop: '1.25rem' }}><b style={{ color: 'var(--ink)' }}>Timeline:</b> {s.timeline}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {s.stack.map((t) => <span key={t} style={{ fontSize: '0.75rem', border: '1px solid var(--line-2)', borderRadius: '999px', padding: '0.3rem 0.7rem', color: 'var(--ink-2)', background: 'var(--surface)' }}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec dash-bottom">
        <div className="container-center" style={{ maxWidth: '52rem' }}>
          <h2 style={h2}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {s.faqs.map((f) => (
              <details key={f.q} className="card" style={{ padding: '1.1rem 1.25rem' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{f.q}</summary>
                <p style={{ ...body, fontSize: '0.9375rem', marginTop: '0.75rem' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container-center">
          <div className="card" style={{ background: 'var(--dark)', color: '#fff', textAlign: 'center', padding: 'clamp(2rem, 6vw, 3.5rem)', borderRadius: '24px', border: 'none' }}>
            <h2 style={{ ...h2, color: '#fff' }}>Let&apos;s talk about your project</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '32rem', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              A free 30-minute call with our Abuja team. You&apos;ll get an honest view of scope, timeline and cost — and a fixed proposal within 48 hours.
            </p>
            <Link href="/book" className="btn-light">Book a free call</Link>
          </div>
          {related.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ ...h2, fontSize: '1.25rem' }}>Related services</h2>
              <div className="g-3">
                {related.map((r) => (
                  <Link key={r!.slug} href={`/services/${r!.slug}`} className="card" style={{ display: 'block' }}>
                    <div style={{ fontWeight: 700, marginBottom: '0.35rem' }}>{r!.name} →</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>{r!.h1}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
