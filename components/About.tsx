'use client';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+',  label: 'Years Active' },
];

const facts = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    heading: 'Based in Abuja',
    body: 'Headquartered in the FCT. Not remote-only — we can meet in person when it matters.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    heading: 'CAC Registered',
    body: 'RC number available on request. We operate as a proper company, not a freelance collective.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M18 20V10M12 20V4M6 20v-4" />
      </svg>
    ),
    heading: 'Post-launch support',
    body: 'Most agencies vanish after the invoice. We offer ongoing support and treat long-term clients differently.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
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
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <span className="sec-label">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
                About us
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.035em', marginBottom: '1.25rem',
              }}>
                Built in Abuja,<br />
                <span className="gradient-text">for Nigeria.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.55)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Nexxra Digital is a technology company headquartered in Abuja. We build websites,
                mobile apps, SaaS platforms, and automation systems for businesses that need
                digital infrastructure they can actually rely on.
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.55)', lineHeight: 1.85 }}>
                We work with startups, SMEs, and established companies across Nigeria — from simple
                business websites to full-scale enterprise platforms.
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: '0',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              overflow: 'hidden',
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1,
                  padding: '1.5rem 1.25rem',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 700, letterSpacing: '-0.04em',
                    color: '#f0f4ff', lineHeight: 1, marginBottom: '0.375rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,244,255,0.35)', fontWeight: 500 }}>
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

          {/* Right: image + fact cards */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

            {/* Real photo */}
            <div style={{
              borderRadius: '16px', overflow: 'hidden', position: 'relative',
              height: '220px', flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '0.25rem',
            }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85"
                alt="Nexxra Digital team at work"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(5,8,20,0.3) 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem',
                background: 'rgba(5,8,20,0.8)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', padding: '0.5rem 0.875rem',
              }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f0f4ff' }}>Building from Abuja</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(240,244,255,0.4)' }}>FCT, Nigeria · Est. 2021</div>
              </div>
            </div>
            {facts.map((f) => (
              <div
                key={f.heading}
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.375rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(59,130,246,0.2)';
                  el.style.background = 'rgba(255,255,255,0.045)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.12) 100%)',
                  border: '1px solid rgba(59,130,246,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#93c5fd',
                }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.3rem' }}>
                    {f.heading}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.45)', lineHeight: 1.75, margin: 0 }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
