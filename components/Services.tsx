'use client';

const services = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'Fast, modern websites that convert visitors into customers. From landing pages to full corporate portals built to perform.',
    tags: ['Next.js', 'React', 'WordPress'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    title: 'Mobile App Development',
    desc: 'iOS and Android apps people actually enjoy using. Native performance, clean UI, and a solid backend that scales.',
    tags: ['React Native', 'Flutter', 'iOS / Android'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    title: 'Real Estate Solutions',
    desc: 'Property portals, agent CRMs, virtual tours, and lead generation — built specifically for the Nigerian market.',
    tags: ['Listings', 'CRM', 'Portals'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    title: 'SaaS Development',
    desc: 'Multi-tenant software products with billing, dashboards, and the cloud architecture needed to scale reliably.',
    tags: ['Multi-tenant', 'Billing', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '05',
    title: 'Business Automation',
    desc: 'Connect your tools, automate workflows, and eliminate the manual work that slows your team down every day.',
    tags: ['CRM Automation', 'Workflows', 'APIs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '06',
    title: 'Digital Marketing',
    desc: 'SEO, paid ads, social media strategy, and content that grows your traffic and turns it into real revenue.',
    tags: ['SEO', 'Social Media', 'PPC'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
            color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
            textTransform: 'uppercase',
          }}>
            What we build
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1rem',
          }}>
            Six services. One team.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.4)', lineHeight: 1.75, maxWidth: '40rem' }}>
            We cover the full stack of digital services that growing Nigerian businesses need — from idea to launch and beyond.
          </p>
        </div>

        <div className="g-3">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.06}s`,
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative', height: '180px', overflow: 'hidden', flexShrink: 0,
              }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Subtle bottom fade into card */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
                  background: 'linear-gradient(to top, rgba(5,8,20,0.8), transparent)',
                }} />
                {/* Number badge */}
                <span style={{
                  position: 'absolute', top: '0.75rem', right: '0.75rem',
                  fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.45)',
                  background: 'rgba(5,8,20,0.65)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  padding: '0.2rem 0.5rem',
                }}>
                  {svc.num}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                <h3 style={{
                  fontSize: '1.125rem', fontWeight: 700,
                  color: '#f0f4ff', letterSpacing: '-0.015em',
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem', color: 'rgba(240,244,255,0.4)',
                  lineHeight: 1.8, margin: 0, flex: 1,
                }}>
                  {svc.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.25rem' }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.6875rem', fontWeight: 500,
                      color: 'rgba(240,244,255,0.35)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      {tag}
                    </span>
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
