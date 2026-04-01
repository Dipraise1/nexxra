'use client';

const stats = [
  { value: '0', label: 'Projects Delivered' },
  { value: '0', label: 'Happy Clients' },
  { value: '0',  label: 'Years Active' },
];

const facts = [
  {
    heading: 'Based in Abuja',
    body: 'Headquartered in the FCT. Not remote-only — we can meet in person when it matters.',
  },
  {
    heading: 'CAC Registered',
    body: 'RC number available on request. We operate as a proper company, not a freelance collective.',
  },
  {
    heading: 'Post-launch support',
    body: 'Most agencies vanish after the invoice. We offer ongoing support and treat long-term clients differently.',
  },
  {
    heading: 'Global standards, local context',
    body: "Built to international engineering standards with deep understanding of Nigeria's market and infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">
        <div className="g-2t">

          {/* Left */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <p style={{
                fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
                color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}>
                About us
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.035em', marginBottom: '1.25rem',
              }}>
                Built in Abuja,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,244,255,0.35)' }}>
                  for Nigeria.
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.45)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Nexxra Digital is a technology company headquartered in Abuja. We build websites,
                mobile apps, SaaS platforms, and automation systems for businesses that need
                digital infrastructure they can actually rely on.
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.45)', lineHeight: 1.85 }}>
                We work with startups, SMEs, and established companies across Nigeria — from simple
                business websites to full-scale enterprise platforms.
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '1.5rem',
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1,
                  paddingRight: i < stats.length - 1 ? '1.5rem' : '0',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : '0',
                }}>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700, letterSpacing: '-0.03em',
                    color: '#f0f4ff', lineHeight: 1, marginBottom: '0.375rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'rgba(240,244,255,0.28)', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn-primary">
                Work with us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: fact cards */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', transitionDelay: '0.15s' }}>
            {facts.map((f) => (
              <div
                key={f.heading}
                style={{
                  padding: '1.5rem',
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
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.5rem' }}>
                  {f.heading}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.4)', lineHeight: 1.75, margin: 0 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
