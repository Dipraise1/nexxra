'use client';

const industries = [
  { num: '01', name: 'Real Estate',       desc: 'Property listing platforms, agent CRM, virtual tours, and lead generation for the Nigerian market.', featured: true },
  { num: '02', name: 'Finance & Fintech',  desc: 'Payment processing, loan management systems, and digital banking interfaces.' },
  { num: '03', name: 'Healthcare',         desc: 'Patient management, appointment booking, and telemedicine platforms.' },
  { num: '04', name: 'E-Commerce',         desc: 'Online stores, multi-vendor marketplaces, and payment gateway integrations.' },
  { num: '05', name: 'Education',          desc: 'Learning management systems, student portals, and e-learning platforms.' },
  { num: '06', name: 'Logistics',          desc: 'Fleet tracking, delivery management, and route optimisation software.' },
];

export default function Industries() {
  return (
    <section id="industries" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad">
        <div className="sec-hd reveal">
          <h2>Industries We Serve</h2>
          <p>Not theoretical experience — we&apos;ve shipped real products across these sectors.</p>
        </div>

        <div style={{ borderTop: '1px dashed var(--line-dash)' }}>
          {industries.map((ind, i) => (
            <div key={ind.name} className="ind-row-item reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '1.25rem', alignItems: 'start' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, fontFamily: 'monospace', color: 'var(--ink-3)', paddingTop: '0.25rem' }}>{ind.num}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.375rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>{ind.name}</h3>
                    {ind.featured && <span className="tag-accent tag">Primary</span>}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0, maxWidth: '46rem' }}>{ind.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '0.25rem', flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
