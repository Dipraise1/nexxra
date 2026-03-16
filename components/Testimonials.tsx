const testimonials = [
  {
    name: 'Emeka Okonkwo',
    role: 'CEO, PrimeProperties Abuja',
    text: 'The property portal they built generates qualified leads every day. I wasn\'t expecting that level of quality from a local team — I was wrong to doubt it.',
    initials: 'EO',
    featured: true,
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
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="sec" style={{ background: '#050d1e' }}>
      <div className="container-center">

        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            What clients say
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}>
            Real feedback from Nigerian businesses we&apos;ve worked with.
          </p>
        </div>

        {/* Featured testimonial — full width */}
        <div
          className="reveal"
          style={{
            padding: '2.25rem',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '1rem',
          }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
            color: 'rgba(241,245,249,0.75)',
            lineHeight: 1.8,
            marginBottom: '1.75rem',
            fontStyle: 'italic',
          }}>
            &ldquo;{featured.text}&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(241,245,249,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
              letterSpacing: '0.04em',
            }}>
              {featured.initials}
            </div>
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9' }}>{featured.name}</div>
              <div style={{ fontSize: '0.8125rem', color: 'rgba(241,245,249,0.35)' }}>{featured.role}</div>
            </div>
          </div>
        </div>

        {/* Two smaller testimonials */}
        <div className="g-2">
          {rest.map((t, i) => (
            <div
              key={t.name}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(241,245,249,0.6)',
                lineHeight: 1.85,
                flex: 1,
                marginBottom: '1.25rem',
                fontStyle: 'italic',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(241,245,249,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.625rem', fontWeight: 700, flexShrink: 0,
                  letterSpacing: '0.05em',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f1f5f9' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(241,245,249,0.35)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
