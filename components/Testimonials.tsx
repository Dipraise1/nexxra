const testimonials = [
  {
    name: 'Emeka Okonkwo',
    role: 'CEO, PrimeProperties Abuja',
    text: 'The property portal they built generates qualified leads every day. I wasn\'t expecting that level of quality from a local team — I was wrong to doubt it.',
    initials: 'EO',
    color: '#2563eb',
    featured: true,
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Founder, CapitalEdge Fintech',
    text: 'Delivered on time, within budget, and the team actually communicated throughout. That alone puts them ahead of every other agency I\'ve worked with.',
    initials: 'FA',
    color: '#7c3aed',
  },
  {
    name: 'David Nwosu',
    role: 'MD, BuildRight Construction',
    text: 'The automation system saved us 40 hours a week in manual work. We saw the ROI within the first month.',
    initials: 'DN',
    color: '#0891b2',
  },
];

function Stars() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="sec" style={{ background: '#070c1a' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="sec-label">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
            Client testimonials
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '0.875rem',
          }}>
            What our clients say.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)', lineHeight: 1.75 }}>
            Real feedback from Nigerian businesses we&apos;ve built for.
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          className="reveal"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(59,130,246,0.15)',
            marginBottom: '1.25rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gradient top border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
          }} />

          {/* Large quote mark */}
          <div style={{
            position: 'absolute', top: '1.5rem', right: '2rem',
            fontSize: '8rem', lineHeight: 1,
            color: 'rgba(59,130,246,0.06)',
            fontFamily: 'Georgia, serif',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            &ldquo;
          </div>

          <Stars />

          <p style={{
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            color: 'rgba(240,244,255,0.8)',
            lineHeight: 1.8, marginBottom: '2rem',
            fontStyle: 'italic', position: 'relative', zIndex: 1,
            maxWidth: '56rem',
          }}>
            &ldquo;{featured.text}&rdquo;
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
              background: `linear-gradient(135deg, ${featured.color}44, ${featured.color}22)`,
              border: `1px solid ${featured.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8125rem', fontWeight: 700, color: featured.color,
              letterSpacing: '0.04em',
            }}>
              {featured.initials}
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f4ff' }}>{featured.name}</div>
              <div style={{ fontSize: '0.8125rem', color: 'rgba(240,244,255,0.38)' }}>{featured.role}</div>
            </div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="g-2">
          {rest.map((t, i) => (
            <div
              key={t.name}
              className="card reveal"
              style={{
                display: 'flex', flexDirection: 'column',
                transitionDelay: `${i * 0.1}s`,
                padding: '1.75rem',
              }}
            >
              <Stars />
              <p style={{
                fontSize: '0.9375rem', color: 'rgba(240,244,255,0.6)',
                lineHeight: 1.85, flex: 1, marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
                  border: `1px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6875rem', fontWeight: 700, color: t.color,
                  letterSpacing: '0.05em',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(240,244,255,0.35)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
