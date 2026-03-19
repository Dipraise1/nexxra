'use client';

const testimonials = [
  {
    name: 'Emeka Okonkwo',
    role: 'CEO, PrimeProperties Abuja',
    text: 'The property portal they built generates qualified leads every day. I wasn\'t expecting that level of quality from a local team — I was wrong to doubt it.',
    initials: 'EO',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Founder, CapitalEdge Fintech',
    text: 'Delivered on time, within budget, and the team actually communicated throughout. That alone puts them ahead of every other agency I\'ve worked with.',
    initials: 'FA',
  },
  {
    name: 'David Nwosu',
    role: 'MD, BuildRight Construction',
    text: 'The automation system saved us 40 hours a week in manual work. We saw the ROI within the first month.',
    initials: 'DN',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
            color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
            textTransform: 'uppercase',
          }}>
            Client testimonials
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 700, color: '#f0f4ff',
            letterSpacing: '-0.035em', lineHeight: 1.08,
          }}>
            What our clients say.
          </h2>
        </div>

        <div className="g-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.08}s`,
                display: 'flex', flexDirection: 'column',
                padding: '2rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
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
              <p style={{
                fontSize: '1rem', color: 'rgba(240,244,255,0.55)',
                lineHeight: 1.85, flex: 1, marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6875rem', fontWeight: 700, color: 'rgba(240,244,255,0.4)',
                  letterSpacing: '0.04em',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f0f4ff' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,244,255,0.3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
