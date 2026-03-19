'use client';

const steps = [
  { number: '01', title: 'Discovery call', desc: 'We talk through your goals, timeline, and budget. No hard sell — just an honest conversation about whether we\'re the right fit.' },
  { number: '02', title: 'Proposal', desc: 'You get a written proposal within 48 hours: scope, timeline, cost, and the tech we\'ll use. Everything in plain language.' },
  { number: '03', title: 'Design', desc: 'We design your product first. You review and approve mockups before a single line of code is written.' },
  { number: '04', title: 'Development', desc: 'Our engineers build it. You get weekly progress updates and access to a staging environment throughout.' },
  { number: '05', title: 'Testing & QA', desc: 'We test across devices, browsers, and edge cases before anything goes live. No surprises after launch.' },
  { number: '06', title: 'Launch & handover', desc: 'We deploy, train your team, and stay on for 30 days post-launch. Ongoing support is available after that.' },
];

export default function Process() {
  return (
    <section id="process" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">
        <div className="g-2t">

          {/* Sticky left */}
          <div className="reveal" style={{ position: 'sticky', top: '8rem' }}>
            <p style={{
              fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
              color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
              textTransform: 'uppercase',
            }}>
              How it works
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 700, color: '#f0f4ff',
              letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1.25rem',
            }}>
              From first call<br />to launch — {' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,244,255,0.35)' }}>
                six steps.
              </span>
            </h2>
            <p style={{
              fontSize: '1rem', color: 'rgba(240,244,255,0.4)',
              lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '28rem',
            }}>
              The same disciplined process on every project. Predictable, transparent, and built to deliver.
            </p>
            <a href="#contact" className="btn-primary">
              Book a free call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Steps */}
          <div className="reveal">
            {steps.map((step) => (
              <div key={step.number} style={{
                display: 'flex', gap: '1.5rem',
                paddingBottom: '2.5rem',
                paddingTop: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '0',
              }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 600,
                  color: 'rgba(240,244,255,0.2)',
                  fontFamily: 'monospace',
                  flexShrink: 0,
                  paddingTop: '0.25rem',
                }}>
                  {step.number}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '1rem', fontWeight: 700, color: '#f0f4ff',
                    marginBottom: '0.5rem', letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.38)', lineHeight: 1.8, margin: 0 }}>
                    {step.desc}
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
