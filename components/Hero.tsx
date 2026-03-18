'use client';

const stats = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '30+',  label: 'Clients Served' },
  { value: '3 yrs', label: 'In Business' },
  { value: '100%', label: 'On-Time Delivery' },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#050814',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-15%', left: '-10%',
        width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '0', right: '-5%',
        width: '45vw', height: '45vw', maxWidth: '550px', maxHeight: '550px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.13) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid" style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.45,
      }} />

      <div className="container-center" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>

          {/* ── LEFT: Content ── */}
          <div>
            {/* Eyebrow */}
            <div className="fade-in-up" style={{ marginBottom: '1.75rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em',
                color: 'rgba(240,244,255,0.5)',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,0.8)',
                  display: 'inline-block', flexShrink: 0,
                }} />
                Abuja, Nigeria · CAC Registered · Accepting Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-up delay-100" style={{
              fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
              color: '#f0f4ff',
              marginBottom: '1.5rem',
            }}>
              We build{' '}
              <span className="gradient-text">digital products</span>
              {' '}that actually work.
            </h1>

            {/* Subtext */}
            <p className="fade-in-up delay-200" style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: 'rgba(240,244,255,0.5)',
              lineHeight: 1.85,
              maxWidth: '480px',
              marginBottom: '2.5rem',
            }}>
              Nexxra Digital is an Abuja-based tech company. Websites, mobile apps, SaaS
              platforms, and automation — delivered on time, every time.
            </p>

            {/* CTAs */}
            <div className="fade-in-up delay-300" style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '3.5rem',
            }}>
              <a href="#contact" className="btn-primary">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#services" className="btn-ghost-white">
                See our work
              </a>
            </div>

            {/* Stats */}
            <div className="fade-in-up delay-400" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '2rem',
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: i < stats.length - 1 ? '1rem' : '0',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingLeft: i > 0 ? '1rem' : '0',
                }}>
                  <div style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                    fontWeight: 700, letterSpacing: '-0.03em',
                    color: '#f0f4ff', lineHeight: 1, marginBottom: '0.3rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem', color: 'rgba(240,244,255,0.3)',
                    fontWeight: 500, lineHeight: 1.3,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual panel ── */}
          <div className="fade-in-up delay-300" style={{ position: 'relative' }}>

            {/* Browser mockup */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
            }}>
              {/* Browser chrome */}
              <div style={{
                padding: '0.875rem 1.125rem',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {['#ef4444','#f59e0b','#10b981'].map((c, i) => (
                    <div key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.7 }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, height: '26px', borderRadius: '6px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', gap: '0.4rem',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  </svg>
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.02em' }}>
                    nexxradigital.com/projects
                  </span>
                </div>
              </div>

              {/* Main image */}
              <div style={{ position: 'relative', height: 'clamp(240px, 35vw, 360px)', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85"
                  alt="Modern tech workspace"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(5,8,20,0.1) 0%, rgba(5,8,20,0.4) 100%)',
                }} />

                {/* Floating stat badge — top right */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(5,8,20,0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  padding: '0.625rem 0.875rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(124,58,237,0.2))',
                    border: '1px solid rgba(59,130,246,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff', lineHeight: 1 }}>+24</div>
                    <div style={{ fontSize: '0.625rem', color: 'rgba(240,244,255,0.4)', fontWeight: 500 }}>Leads this week</div>
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div style={{
                padding: '1rem 1.125rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.125rem' }}>
                    PrimeProperties Portal
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'rgba(240,244,255,0.35)' }}>
                    Real Estate · Abuja, Nigeria
                  </div>
                </div>
                <span style={{
                  padding: '0.25rem 0.625rem',
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.25)',
                  borderRadius: '9999px',
                  fontSize: '0.625rem', fontWeight: 700,
                  color: '#34d399', letterSpacing: '0.06em',
                }}>
                  LIVE
                </span>
              </div>
            </div>

            {/* Floating notification card — bottom left */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem', left: '-1.25rem',
              background: 'rgba(5,8,20,0.92)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px',
              padding: '0.875rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              minWidth: '200px',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f0f4ff', lineHeight: 1.2 }}>
                  New property listed
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(240,244,255,0.4)', marginTop: '0.125rem' }}>
                  ₦45M · Maitama, Abuja
                </div>
              </div>
            </div>

            {/* Tech stack badges — top left */}
            <div style={{
              position: 'absolute', top: '-1rem', left: '-1rem',
              display: 'flex', flexDirection: 'column', gap: '0.375rem',
            }}>
              {['Next.js', 'React Native', 'Node.js'].map((tech) => (
                <span key={tech} style={{
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(5,8,20,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '9999px',
                  fontSize: '0.6875rem', fontWeight: 600,
                  color: 'rgba(240,244,255,0.5)',
                  display: 'inline-block',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
        background: 'linear-gradient(to top, #050814, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />
    </section>
  );
}
