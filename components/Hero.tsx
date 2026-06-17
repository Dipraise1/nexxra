'use client';

const avatars = [
  'https://images.unsplash.com/photo-1604933762021-54a5858c9832?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1612831197630-ba9be548f9a9?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1573495612522-d994e72e5f56?auto=format&fit=crop&w=120&q=80',
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: 'var(--bg)',
        overflow: 'hidden',
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      }}
    >
      {/* Faint line grid background with radial fade */}
      <div aria-hidden="true" className="line-grid" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        opacity: 0.55,
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 42%, #000 0%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 42%, #000 0%, transparent 75%)',
      }} />

      <div className="frame frame-pad dash-bottom" style={{ position: 'relative', zIndex: 1, paddingTop: '1rem', paddingBottom: '4.5rem' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', maxWidth: '46rem', margin: '0 auto',
        }}>

          {/* Trust pill */}
          <div className="fade-in-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
            padding: '0.3rem 0.875rem 0.3rem 0.4rem',
            background: 'var(--surface)', border: '1px solid var(--line)',
            borderRadius: '9999px', boxShadow: 'var(--shadow-card)',
            marginBottom: '2rem',
          }}>
            <div style={{ display: 'flex' }}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    objectFit: 'cover', border: '2px solid #fff',
                    marginLeft: i === 0 ? 0 : '-8px',
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.8125rem', color: 'var(--ink-2)', fontWeight: 500 }}>
              Trusted by bold businesses in Nigeria
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-100" style={{
            fontSize: 'clamp(2rem, 7vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: 'var(--ink)',
            marginBottom: '1.5rem',
            width: '100%',
          }}>
            Next-Gen Digital Solutions Designed to be <span className="brand-grad">Fast</span>
          </h1>

          {/* Subtext */}
          <p className="fade-in-up delay-200" style={{
            fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.7,
            width: '100%', maxWidth: '30rem', marginBottom: '2.25rem',
          }}>
            Helping Nigerian businesses grow with clean code,
            scalable products, and design that performs.
          </p>

          {/* CTA + socials */}
          <div className="fade-in-up delay-300" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#contact" className="btn-primary" style={{ minHeight: '52px', padding: '0 2.25rem', fontSize: '0.95rem' }}>
              Start Your Project
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', fontWeight: 500 }}>Follow us</span>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nexxradigitals"
                target="_blank"
                rel="noopener noreferrer"
                className="social-ico"
                aria-label="Nexxra Digital on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok — coming soon */}
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <span className="social-ico is-soon" aria-label="TikTok — coming soon" title="TikTok — coming soon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3c.32 2.06 1.47 3.4 3.5 3.55v2.42c-1.18.12-2.21-.27-3.41-1v5.84c0 3.45-2.46 5.69-5.62 5.69-3.06 0-5.47-2.36-5.47-5.27 0-3.27 2.7-5.6 6.07-4.99v2.56c-.4-.1-.83-.16-1.27-.16-1.4 0-2.4 1.02-2.4 2.45 0 1.46 1.01 2.5 2.45 2.5 1.53 0 2.62-1.13 2.62-2.86V3h3.43z" />
                  </svg>
                </span>
                <span className="soon-badge">Soon</span>
              </span>
            </div>
          </div>
        </div>

        {/* Showcase — African tech team */}
        <div className="fade-in-up delay-400 hero-shot" style={{
          marginTop: 'clamp(2.5rem, 6vw, 4rem)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1400&q=80"
            alt="Software team collaborating in Abuja, Nigeria"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
