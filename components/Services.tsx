'use client';

const services = [
  {
    num: '01',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    title: 'Website Development',
    desc: 'Fast, modern websites that convert visitors into customers. From landing pages to full corporate portals built to perform.',
    tags: ['Next.js', 'React', 'WordPress'],
    accent: 'rgba(37,99,235,0.7)',
  },
  {
    num: '02',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    title: 'Mobile App Development',
    desc: 'iOS and Android apps people actually enjoy using. Native performance, clean UI, and a solid backend that scales.',
    tags: ['React Native', 'Flutter', 'iOS & Android'],
    accent: 'rgba(124,58,237,0.7)',
  },
  {
    num: '03',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    title: 'Real Estate Solutions',
    desc: 'Property portals, agent CRMs, virtual tours, and lead generation — built specifically for the Nigerian market.',
    tags: ['Listings', 'CRM', 'Portals'],
    accent: 'rgba(37,99,235,0.7)',
  },
  {
    num: '04',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'SaaS Development',
    desc: 'Multi-tenant software products with billing, dashboards, and the cloud architecture needed to scale reliably.',
    tags: ['Multi-tenant', 'Billing', 'Cloud'],
    accent: 'rgba(124,58,237,0.7)',
  },
  {
    num: '05',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    title: 'Business Automation',
    desc: 'Connect your tools, automate workflows, and eliminate the manual work that slows your team down every day.',
    tags: ['CRM Automation', 'Workflows', 'APIs'],
    accent: 'rgba(37,99,235,0.7)',
  },
  {
    num: '06',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    title: 'Digital Marketing',
    desc: 'SEO, paid ads, social media strategy, and content that grows your traffic and turns it into real revenue.',
    tags: ['SEO', 'Social Media', 'PPC'],
    accent: 'rgba(124,58,237,0.7)',
  },
];

export default function Services() {
  return (
    <section id="services" className="sec" style={{ background: '#070c1a' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="sec-label">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
            What we build
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '0.875rem',
          }}>
            Six services. One team.<br />Every project delivered properly.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)', lineHeight: 1.75, maxWidth: '42rem' }}>
            We cover the full stack of digital services that growing Nigerian businesses need — from idea to launch and beyond.
          </p>
        </div>

        <div className="g-3">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.07}s`,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, box-shadow 0.35s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-7px)';
                el.style.borderColor = 'rgba(59,130,246,0.25)';
                el.style.boxShadow = '0 28px 70px rgba(0,0,0,0.55), 0 0 60px rgba(59,130,246,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, rgba(5,8,20,0.05) 0%, rgba(5,8,20,0.65) 100%)`,
                }} />
                {/* Coloured accent tint */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${svc.accent} 0%, transparent 50%)`,
                  opacity: 0.25,
                }} />
                {/* Number badge */}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.5)',
                  background: 'rgba(5,8,20,0.7)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '9999px',
                  padding: '0.2rem 0.6rem',
                }}>
                  {svc.num}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                <h3 style={{
                  fontSize: '1.0625rem', fontWeight: 700,
                  color: '#f0f4ff', letterSpacing: '-0.015em',
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem', color: 'rgba(240,244,255,0.48)',
                  lineHeight: 1.8, flex: 1, margin: 0,
                }}>
                  {svc.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.375rem' }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
