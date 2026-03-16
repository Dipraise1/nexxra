const steps = [
  { number: '01', title: 'Discovery call', desc: 'We talk through your goals, timeline, and budget. No hard sell — just an honest conversation about whether we\'re the right fit.' },
  { number: '02', title: 'Proposal', desc: 'You get a written proposal within 48 hours: scope, timeline, cost, and the tech we\'ll use. Everything in plain language.' },
  { number: '03', title: 'Design', desc: 'We design your product first. You review and approve mockups before a single line of code is written.' },
  { number: '04', title: 'Development', desc: 'Our engineers build it. You get weekly progress updates and access to a staging environment throughout.' },
  { number: '05', title: 'Testing & QA', desc: 'We test across devices, browsers, and edge cases before anything goes live. No surprises after launch.' },
  { number: '06', title: 'Launch & handover', desc: 'We deploy, train your team, and stay on for 30 days post-launch. After that, ongoing support is available.' },
];

export default function Process() {
  return (
    <section id="process" className="sec" style={{ background: '#030712' }}>
      <div className="container-center">
        <div style={{
          display: 'grid',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'start',
        }}
        className="g-2t"
        >
          {/* Left: heading + context */}
          <div className="reveal" style={{ position: 'sticky', top: '8rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              How a project works
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.5)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '28rem' }}>
              Six steps from first call to launch. The same process, every time — because it works.
            </p>
            <a href="#contact" className="btn-primary">
              Book a free call
            </a>
          </div>

          {/* Right: numbered steps — no cards, clean text */}
          <div className="reveal">
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '1.25rem',
                  paddingBottom: i < steps.length - 1 ? '2rem' : '0',
                  marginBottom: i < steps.length - 1 ? '2rem' : '0',
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Number */}
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'rgba(96,165,250,0.7)',
                  letterSpacing: '0.05em',
                  paddingTop: '0.2rem',
                  fontFamily: '"Fira Code", Consolas, monospace',
                }}>
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    marginBottom: '0.375rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(241,245,249,0.45)', lineHeight: 1.75 }}>
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
