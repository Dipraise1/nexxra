const industries = [
  {
    name: 'Real Estate',
    desc: 'Property listing platforms, agent CRM, virtual tours, mortgage calculators, and lead generation — built for the Abuja and Nigerian market.',
    features: ['Property Listing Portals', 'Agent & Broker CRM', 'Virtual Property Tours', 'Mortgage Calculator Tools', 'Lead Generation Systems', 'Property Analytics'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Finance & Fintech',
    desc: 'Payment processing, loan management, digital banking interfaces, and financial dashboards built for Nigerian regulations.',
  },
  {
    name: 'Healthcare',
    desc: 'Patient management, appointment booking, telemedicine, and hospital administration software.',
  },
  {
    name: 'E-Commerce',
    desc: 'Online stores, multi-vendor marketplaces, inventory management, and payment gateway integrations.',
  },
  {
    name: 'Education',
    desc: 'Learning management systems, student portals, e-learning platforms, and school admin software.',
  },
  {
    name: 'Logistics',
    desc: 'Fleet tracking, delivery management, route optimization, and supply chain visibility.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="sec" style={{ background: '#050d1e' }}>
      <div className="container-center">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800, color: '#f1f5f9',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem',
          }}>
            Industries we serve
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}>
            We have built actual products in these sectors — not theoretical experience.
          </p>
        </div>

        {/* Featured real estate card */}
        <div
          className="reveal"
          style={{
            marginBottom: '1.5rem',
            padding: '2rem',
            borderRadius: '20px',
            background: 'rgba(59,130,246,0.04)',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          <div className="g-2t">
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60a5fa', flexShrink: 0,
                }}>
                  {industries[0].icon}
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  {industries[0].name}
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(96,165,250,0.7)', marginLeft: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Primary Focus
                  </span>
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.55)', lineHeight: 1.8 }}>
                {industries[0].desc}
              </p>
              <div>
                <a href="#contact" className="btn-primary">
                  Build Your Real Estate Platform
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem' }}>
              {industries[0].features!.map((f) => (
                <div key={f} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 0.875rem',
                  borderRadius: '10px',
                  background: 'rgba(59,130,246,0.05)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  fontSize: '0.8125rem',
                  color: 'rgba(241,245,249,0.7)',
                  fontWeight: 500,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other industries — plain list rows */}
        <div className="reveal" style={{
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
        }}>
          {industries.slice(1).map((ind, i) => (
            <div
              key={ind.name}
              className="ind-row"
              style={{
                padding: '1.25rem 1.75rem',
                borderBottom: i < industries.length - 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9', paddingTop: '0.1rem' }}>
                {ind.name}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(241,245,249,0.45)', lineHeight: 1.7, margin: 0 }}>
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
