'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How long does a project take?',        a: 'Most websites take 2–4 weeks. Mobile apps and SaaS products typically take 6–12 weeks depending on complexity.' },
  { q: 'Do you provide post-launch support?',  a: 'Yes — we include 30 days of free support after launch. After that, we offer monthly maintenance packages or ad-hoc support as needed.' },
  { q: "What's your design process like?",     a: 'We design your product first and you approve mockups before any code is written. You review every milestone, with weekly updates and a live staging environment.' },
  { q: 'How much does a project cost?',         a: 'It depends on scope. A simple website starts around ₦500k; complex platforms run higher. You get a fixed quote before any work begins — no surprises.' },
  { q: 'Do you work with clients outside Abuja?', a: 'Yes. We work with businesses across Nigeria and internationally, collaborating over calls and shared project tools.' },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="faq-item" data-open={open}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-a"><div className="faq-a-inner"><p>{a}</p></div></div>
    </div>
  );
}

export default function CTA() {
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
        <div className="frame frame-pad">
          <div className="sec-hd reveal">
            <span className="sec-label"><span className="dot" /> Frequently asked questions</span>
            <h2>Got questions? We&apos;ve got answers.</h2>
            <p>Here&apos;s a quick look at how we work and what to expect.</p>
          </div>

          <div className="reveal" style={{ maxWidth: '44rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA block */}
      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="frame frame-pad">
          <div className="reveal-scale" style={{
            position: 'relative', overflow: 'hidden',
            background: 'var(--dark)', borderRadius: '24px',
            padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
          }}>
            {/* grid texture */}
            <div aria-hidden="true" className="line-grid-dark" style={{
              position: 'absolute', inset: 0,
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000, transparent 75%)',
            }} />
            {/* brand accent glow */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
              width: '70%', height: '120%',
              background: 'radial-gradient(ellipse at center, rgba(58,92,255,0.32) 0%, rgba(109,75,255,0.12) 40%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: '1rem' }}>
                Ready to Elevate Your Digital Presence?
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '34rem', margin: '0 auto 2.25rem' }}>
                Whether it&apos;s a website, app, or complete brand experience — we&apos;ll bring your ideas to life with precision and purpose.
              </p>
              <a href="#contact" className="btn-light" style={{ minHeight: '52px', padding: '0 2.25rem' }}>
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
