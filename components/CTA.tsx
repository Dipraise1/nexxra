const trustItems = ['CAC Registered', 'NDA Available', 'Free Consultation', 'Fast Turnaround'];

export default function CTA() {
  return (
    <section
      className="sec-xl"
      style={{ background: '#030712', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        className="container-center reveal"
        style={{ maxWidth: '50rem', textAlign: 'center' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 800,
          color: '#f1f5f9',
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          marginBottom: '1.25rem',
        }}>
          Ready to build something?
        </h2>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(241,245,249,0.48)',
          lineHeight: 1.8,
          maxWidth: '34rem',
          margin: '0 auto 2.5rem',
        }}>
          Book a free call. We&apos;ll scope your project and send you a detailed
          proposal within 48 hours. No obligation.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.875rem', marginBottom: '3rem' }}>
          <a href="#contact" className="btn-primary">
            Get a free quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="tel:+2348000000000" className="btn-ghost-white">
            Call us
          </a>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center',
          gap: '0.5rem 2rem',
        }}>
          {trustItems.map((item) => (
            <span key={item} style={{
              fontSize: '0.75rem',
              color: 'rgba(241,245,249,0.28)',
              fontWeight: 500,
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
