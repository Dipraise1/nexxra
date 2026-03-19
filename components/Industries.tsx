'use client';

const industries = [
  { name: 'Real Estate', desc: 'Property listing platforms, agent CRM, virtual tours, and lead generation.', featured: true },
  { name: 'Finance & Fintech', desc: 'Payment processing, loan management, digital banking interfaces.' },
  { name: 'Healthcare', desc: 'Patient management, appointment booking, telemedicine platforms.' },
  { name: 'E-Commerce', desc: 'Online stores, multi-vendor marketplaces, payment gateway integrations.' },
  { name: 'Education', desc: 'Learning management systems, student portals, e-learning platforms.' },
  { name: 'Logistics', desc: 'Fleet tracking, delivery management, route optimization.' },
];

export default function Industries() {
  return (
    <section id="industries" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
            color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
            textTransform: 'uppercase',
          }}>
            Industries we serve
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1rem',
          }}>
            Real products built<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,244,255,0.35)' }}>
              in these sectors.
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.4)', lineHeight: 1.75, maxWidth: '38rem' }}>
            Not theoretical experience — we have shipped actual products across these industries.
          </p>
        </div>

        <div style={{
          display: 'grid', gap: '0.75rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        }}>
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="reveal"
              style={{
                padding: '1.75rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f4ff' }}>
                  {ind.name}
                </div>
                {ind.featured && (
                  <span style={{
                    fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px', padding: '0.125rem 0.4rem',
                  }}>
                    Primary
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.38)', lineHeight: 1.75, margin: 0 }}>
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
