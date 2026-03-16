const services = [
  {
    image: 'https://images.unsplash.com/photo-1760670399462-f5e479452c27?auto=format&fit=crop&w=800&q=80',
    title: 'Website Development',
    desc: 'Fast, modern websites that convert visitors into customers. From landing pages to full corporate portals.',
    tags: ['Next.js', 'React', 'WordPress'],
  },
  {
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=800&q=80',
    title: 'Mobile App Development',
    desc: 'iOS and Android apps people actually enjoy using. Native performance, clean UI, solid backend.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    image: 'https://images.unsplash.com/photo-1745725427330-e2697d558a49?auto=format&fit=crop&w=800&q=80',
    title: 'Real Estate Solutions',
    desc: 'Property listing portals, agent CRMs, virtual tours, and lead generation — built specifically for the Nigerian market.',
    tags: ['Listings', 'CRM', 'Portals'],
  },
  {
    image: 'https://images.unsplash.com/photo-1590971862391-06cac0657603?auto=format&fit=crop&w=800&q=80',
    title: 'SaaS Development',
    desc: 'Multi-tenant software products with billing, dashboards, and the cloud architecture to scale.',
    tags: ['Multi-tenant', 'Billing', 'Cloud'],
  },
  {
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80',
    title: 'Business Automation',
    desc: 'Connect your tools, automate your workflows, and cut the manual work that slows your team down.',
    tags: ['CRM Automation', 'Workflows', 'APIs'],
  },
  {
    image: 'https://images.unsplash.com/photo-1661425715124-310ec1b49b8a?auto=format&fit=crop&w=800&q=80',
    title: 'Digital Marketing',
    desc: 'SEO, paid ads, social media strategy, and content. We grow traffic and turn it into revenue.',
    tags: ['SEO', 'Social Media', 'PPC'],
  },
];

export default function Services() {
  return (
    <section id="services" className="sec" style={{ background: '#050d1e' }}>
      <div className="container-center">

        {/* Left-aligned header — breaks the centered pattern */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            What we build
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.5)', lineHeight: 1.7, maxWidth: '36rem' }}>
            Six service areas. One team. Every project delivered properly.
          </p>
        </div>

        <div className="g-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="svc-card reveal"
              style={{
                transitionDelay: `${i * 0.07}s`,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
              }}
            >
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="svc-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(3,7,18,0.1) 0%, rgba(3,7,18,0.55) 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              <div style={{ padding: '1.375rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  letterSpacing: '-0.015em',
                  marginBottom: '0.5rem',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(241,245,249,0.5)',
                  lineHeight: 1.75,
                  marginBottom: '1.125rem',
                  flex: 1,
                }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {service.tags.map((tag) => (
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
