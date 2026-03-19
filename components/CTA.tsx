'use client';

const faqs = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope. A simple website starts around ₦500k. Complex platforms can run into millions. We give you a fixed quote before any work begins — no surprises.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most websites take 2–4 weeks. Mobile apps and SaaS products typically take 6–12 weeks depending on complexity.',
  },
  {
    q: 'Do you work with clients outside Abuja?',
    a: 'Yes. We work with businesses across Nigeria and internationally. Most of our collaboration happens over calls and shared project tools.',
  },
  {
    q: 'What happens after launch?',
    a: 'We include 30 days of free support post-launch. After that, we offer monthly maintenance packages or ad-hoc support as needed.',
  },
];

export default function CTA() {
  return (
    <section style={{ background: '#050814', paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="container-center">

        <div className="g-2t" style={{ gap: 'clamp(3rem, 6vw, 5rem)' }}>

          {/* Left — CTA block */}
          <div className="reveal">
            <p style={{
              fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
              color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
              textTransform: 'uppercase',
            }}>
              Ready to start?
            </p>

            <h2 style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              fontWeight: 700, color: '#f0f4ff',
              lineHeight: 1.05, letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
            }}>
              Let&apos;s build something{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,244,255,0.35)' }}>
                great together.
              </span>
            </h2>

            <p style={{
              fontSize: '1.0625rem',
              color: 'rgba(240,244,255,0.4)',
              lineHeight: 1.8,
              maxWidth: '32rem', marginBottom: '2.5rem',
            }}>
              Book a free call. We&apos;ll scope your project and send a detailed proposal
              within 48 hours. No obligation.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', minHeight: '50px', padding: '0 2rem' }}>
                Get a free quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="mailto:hello@nexxradigital.com" className="btn-ghost-white" style={{ fontSize: '1rem', minHeight: '50px', padding: '0 2rem' }}>
                Email us
              </a>
            </div>

            {/* Trust line */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
              {['CAC Registered', 'NDA Available', 'Free Consultation', '48hr Proposal'].map((item) => (
                <span key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '0.375rem',
                  fontSize: '0.8125rem', color: 'rgba(240,244,255,0.25)', fontWeight: 500,
                }}>
                  <span style={{ fontSize: '0.75rem' }}>✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right — FAQ */}
          <div className="reveal">
            <p style={{
              fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
              color: 'rgba(240,244,255,0.35)', marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}>
              Common questions
            </p>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  paddingTop: '1.25rem', paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.5rem' }}>
                    {faq.q}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.38)', lineHeight: 1.8, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
