import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/forms/PageShell';
import JsonLd, { breadcrumbs } from '@/components/seo/JsonLd';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services — Web, App & Software Development in Abuja, Nigeria',
  description: 'Website development, mobile apps, UI/UX design, SaaS, e-commerce, real estate software, business automation and SEO from Nexxra Digital, a CAC-registered tech company in Abuja.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <section className="sec">
        <div className="container-center">
          <div style={{ maxWidth: '44rem', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.06, marginBottom: '1.25rem' }}>Web, app &amp; software development services in Abuja</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>
              Nexxra Digital is a CAC-registered tech company in Abuja building digital products for businesses across Nigeria — from your first website to a full SaaS platform.
            </p>
          </div>
          <div className="g-2" style={{ alignItems: 'stretch' }}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                {s.video
                  ? <video src={s.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ width: '96px', height: '96px', objectFit: 'cover', borderRadius: '14px', flexShrink: 0 }} />
                  : <img src={s.image} alt="" aria-hidden="true" style={{ width: '96px', height: '96px', objectFit: 'cover', objectPosition: 'top', borderRadius: '14px', flexShrink: 0 }} />}
                <div>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>{s.h1}</h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.metaDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
