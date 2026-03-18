const trustItems = [
  { icon: '✓', text: 'CAC Registered' },
  { icon: '✓', text: 'NDA Available' },
  { icon: '✓', text: 'Free Consultation' },
  { icon: '✓', text: '48hr Proposal' },
];

export default function CTA() {
  return (
    <section
      className="sec-xl"
      style={{
        background: '#050814',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-30%', left: '-10%',
        width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container-center reveal" style={{ position: 'relative', zIndex: 1 }}>
        {/* Gradient-bordered card */}
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 4rem)',
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '28px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top gradient line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)',
          }} />

          {/* Corner glow */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '60%', height: '200px',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <span className="sec-label" style={{ marginBottom: '1.5rem' }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
            Ready to build?
          </span>

          <h2 style={{
            fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
            fontWeight: 700, color: '#f0f4ff',
            lineHeight: 1.05, letterSpacing: '-0.04em',
            marginBottom: '1.25rem',
          }}>
            Let&apos;s build something<br />
            <span className="gradient-text">great together.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            color: 'rgba(240,244,255,0.48)',
            lineHeight: 1.8,
            maxWidth: '34rem', margin: '0 auto 2.75rem',
          }}>
            Book a free call. We&apos;ll scope your project and send a detailed proposal
            within 48 hours. No obligation whatsoever.
          </p>

          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.875rem', marginBottom: '2.5rem',
          }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', minHeight: '50px', padding: '0 2rem' }}>
              Get a free quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+2348000000000" className="btn-ghost-white" style={{ fontSize: '1rem', minHeight: '50px', padding: '0 2rem' }}>
              Call us
            </a>
          </div>

          {/* Trust items */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem 1.75rem',
          }}>
            {trustItems.map((item) => (
              <span
                key={item.text}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.375rem',
                  fontSize: '0.8125rem', color: 'rgba(240,244,255,0.3)',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: '#34d399', fontSize: '0.75rem' }}>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
