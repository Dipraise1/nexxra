'use client';

const services = [
  { icon: '/services/website.gif',    bg: 'linear-gradient(160deg,#eef2ff,#dbe4ff)', title: 'Website Development',    desc: 'Modern, high-converting websites — from landing pages to full corporate portals.' },
  { icon: '/services/design.gif',     bg: 'linear-gradient(160deg,#fce7ff,#f0e0ff)', title: 'UI/UX Design',           desc: 'Intuitive, engaging interfaces that blend creativity with conversion-focused functionality.' },
  { icon: '/services/mobile.gif',     bg: 'linear-gradient(160deg,#e0f2fe,#dbeafe)', title: 'Mobile App Development', desc: 'iOS and Android apps with native performance, polished design, and a backend that scales.' },
  { icon: '/services/realestate.gif', bg: 'linear-gradient(160deg,#dcfce7,#cdeee0)', title: 'Real Estate Solutions',  desc: 'Property portals, agent CRMs, and lead generation built for the Nigerian market.' },
  { icon: '/services/saas.gif',       bg: 'linear-gradient(160deg,#fff1e6,#ffe4cc)', title: 'SaaS Development',       desc: 'Multi-tenant products with billing, dashboards, and cloud architecture that scales.' },
  { icon: '/services/ecommerce.gif',  bg: 'linear-gradient(160deg,#ffe4e6,#fdd3da)', title: 'E-Commerce',             desc: 'Online stores and marketplaces with secure payments and a checkout that converts.' },
  { icon: '/services/automation.gif', bg: 'linear-gradient(160deg,#e6e9ff,#e7defb)', title: 'Business Automation',    desc: 'Automate workflows and integrations to eliminate slow, repetitive manual work.' },
  { icon: '/services/marketing.gif',  bg: 'linear-gradient(160deg,#d6faf3,#cdf3f7)', title: 'Digital Marketing',      desc: 'SEO, paid ads, and content that grows your traffic and turns it into real revenue.' },
];

export default function Services() {
  return (
    <section id="services" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="sec-hd reveal" style={{ maxWidth: '44rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> What we do</span>
          <h2>What We Offer</h2>
          <p>From concept to code, we craft functional, high-performing websites, apps, and platforms — eight ways we help you grow.</p>
        </div>

        <div className="g-4" style={{ gap: '1.5rem' }}>
          {services.map((svc, i) => (
            <div key={svc.title} className="reveal-blur card svc-img-card" style={{ transitionDelay: `${i * 0.04}s`, position: 'relative', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
              {/* Full-bleed animated media panel with number chip + wavy divider */}
              <div style={{ position: 'relative', aspectRatio: '16 / 11', background: svc.bg, overflow: 'hidden' }}>
                <span className="svc-chip" style={{ zIndex: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                <img
                  src={svc.icon}
                  alt={svc.title}
                  loading="lazy"
                  decoding="async"
                  className="svc-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 0 }}
                />
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: '-1px', width: '100%', height: '30px', display: 'block', zIndex: 1 }}>
                  <path d="M0,30 C220,62 420,4 660,26 C880,46 1010,44 1200,20 L1200,60 L0,60 Z" fill="var(--surface)" />
                </svg>
              </div>

              <div style={{ padding: '0.7rem 1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.4rem' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
