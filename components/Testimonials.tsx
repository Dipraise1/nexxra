'use client';

const testimonials = [
  { name: 'Emeka Okonkwo',   role: 'CEO, PrimeProperties Abuja',      text: "The property portal they built generates qualified leads every day. I wasn't expecting that level of quality from a local team — I was wrong to doubt it.", initials: 'EO' },
  { name: 'Fatima Al-Hassan', role: 'Founder, CapitalEdge Fintech',    text: "Delivered on time, within budget, and the team actually communicated throughout. That alone puts them ahead of every other agency I've worked with.", initials: 'FA' },
  { name: 'David Nwosu',     role: 'MD, BuildRight Construction',     text: 'The automation system saved us 40 hours a week in manual work. We saw the ROI within the first month.', initials: 'DN' },
];

function Stars() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad">
        <div className="sec-hd reveal">
          <h2>What Our Happy Clients Say</h2>
          <p>We&apos;ve helped businesses bring their ideas to life. Here&apos;s what they say about working with us.</p>
        </div>

        <div className="g-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal-scale card" style={{ transitionDelay: `${i * 0.08}s`, display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
              <Stars />
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink)', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ paddingTop: '1.25rem', borderTop: '1px dashed var(--line-dash)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)' }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="btn-primary">See All Reviews</a>
        </div>
      </div>
    </section>
  );
}
