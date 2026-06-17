'use client';

const steps = [
  { number: '01', title: 'Discovery call',   desc: "We talk through your goals, timeline, and budget. No hard sell — just an honest conversation about fit." },
  { number: '02', title: 'Proposal',         desc: 'A written proposal within 48 hours: scope, timeline, cost, and tech — all in plain language.' },
  { number: '03', title: 'Design',           desc: 'We design your product first. You review and approve mockups before any code is written.' },
  { number: '04', title: 'Development',      desc: 'Our engineers build it. Weekly progress updates and a staging environment throughout.' },
  { number: '05', title: 'Testing & QA',     desc: 'We test across devices, browsers, and edge cases before anything goes live. No surprises.' },
  { number: '06', title: 'Launch & support', desc: 'We deploy, train your team, and stay on for 30 days post-launch. Ongoing support after.' },
];

export default function Process() {
  return (
    <section id="process" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad">
        <div className="sec-hd reveal">
          <h2>A Structured Process That Turns Ideas Into Exceptional Products</h2>
          <p>The same disciplined process on every project — predictable, transparent, and built to deliver.</p>
        </div>

        <div className="g-3">
          {steps.map((step, i) => (
            <div key={step.number} className="reveal-blur card" style={{ transitionDelay: `${i * 0.06}s`, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="step-num">{step.number}</div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Step</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="btn-primary">Book a free call</a>
        </div>
      </div>
    </section>
  );
}
