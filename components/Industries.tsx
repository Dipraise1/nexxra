'use client';

const industries = [
  {
    name: 'Real Estate',
    desc: 'Property listing platforms, agent CRM, virtual tours, mortgage calculators, and lead generation — built for the Abuja and Nigerian market.',
    features: ['Property Listing Portals', 'Agent & Broker CRM', 'Virtual Property Tours', 'Mortgage Calculator Tools', 'Lead Generation Systems', 'Property Analytics'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    featured: true,
  },
  {
    name: 'Finance & Fintech',
    desc: 'Payment processing, loan management, digital banking interfaces, and financial dashboards built for Nigerian regulations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    desc: 'Patient management, appointment booking, telemedicine, and hospital administration software.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'E-Commerce',
    desc: 'Online stores, multi-vendor marketplaces, inventory management, and payment gateway integrations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.97-1.67l1.38-7.33H6" />
      </svg>
    ),
  },
  {
    name: 'Education',
    desc: 'Learning management systems, student portals, e-learning platforms, and school admin software.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    name: 'Logistics',
    desc: 'Fleet tracking, delivery management, route optimization, and supply chain visibility solutions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [featured, ...rest] = industries;

  return (
    <section id="industries" className="sec" style={{ background: '#070c1a' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="sec-label">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
            Industries we serve
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '0.875rem',
          }}>
            Real products built<br />in these sectors.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)', lineHeight: 1.75, maxWidth: '38rem' }}>
            Not theoretical experience — we have shipped actual products across these industries.
          </p>
        </div>

        {/* Featured Real Estate card */}
        <div
          className="reveal card-gradient"
          style={{ marginBottom: '1.5rem' }}
        >
          <div className="g-2t" style={{ position: 'relative', zIndex: 1 }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.15) 100%)',
                  border: '1px solid rgba(59,130,246,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#93c5fd', flexShrink: 0,
                }}>
                  {featured.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem', fontWeight: 700,
                    color: '#f0f4ff', letterSpacing: '-0.025em', lineHeight: 1.1,
                  }}>
                    {featured.name}
                  </h3>
                  <span style={{
                    fontSize: '0.6875rem', fontWeight: 700, color: '#93c5fd',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    Primary focus
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(240,244,255,0.55)', lineHeight: 1.8 }}>
                {featured.desc}
              </p>
              <div>
                <a href="#contact" className="btn-primary">
                  Build your real estate platform
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem' }}>
              {featured.features!.map((f) => (
                <div key={f} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 0.875rem',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.06)',
                  border: '1px solid rgba(59,130,246,0.14)',
                  fontSize: '0.8125rem',
                  color: 'rgba(240,244,255,0.7)',
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

        {/* Other industries grid */}
        <div className="reveal" style={{
          display: 'grid', gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        }}>
          {rest.map((ind) => (
            <div
              key={ind.name}
              style={{
                padding: '1.375rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(59,130,246,0.2)';
                el.style.background = 'rgba(255,255,255,0.045)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#93c5fd', flexShrink: 0,
              }}>
                {ind.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.375rem' }}>
                  {ind.name}
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(240,244,255,0.42)', lineHeight: 1.75, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
