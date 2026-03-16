const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+',  label: 'Years Active' },
];

const facts = [
  {
    heading: 'We\'re based here',
    body: 'Headquartered in Abuja, FCT. Not a remote-only outfit — we can meet in person when it matters.',
  },
  {
    heading: 'CAC registered',
    body: 'RC number available on request. We operate as a proper company, not a freelance collective.',
  },
  {
    heading: 'We stay involved after launch',
    body: 'Most agencies vanish once the invoice is paid. We offer ongoing support and treat long-term clients differently.',
  },
  {
    heading: 'Global standards, local context',
    body: 'Our team builds to international engineering standards while understanding Nigeria\'s payment landscape, user behaviour, and infrastructure realities.',
  },
];

export default function About() {
  return (
    <section id="about" className="sec" style={{ background: '#030712' }}>
      <div className="container-center">
        <div className="g-2t">

          {/* ── Left: Text ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}>
                Built in Abuja,<br />for Nigeria
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(241,245,249,0.58)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Nexxra Digital is a technology company headquartered in Abuja. We build websites,
                mobile apps, SaaS platforms, and automation systems for businesses that need
                digital infrastructure they can actually rely on.
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(241,245,249,0.58)', lineHeight: 1.8 }}>
                We work with startups, SMEs, and established companies across Nigeria. The
                projects range from simple business websites to full-scale enterprise platforms.
              </p>
            </div>

            {/* Stats row — plain, no gradient */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#f1f5f9',
                    lineHeight: 1.1,
                    marginBottom: '0.2rem',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(241,245,249,0.38)', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn-primary">
                Work With Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Plain facts list ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {facts.map((f, i) => (
              <div
                key={f.heading}
                style={{
                  padding: '1.375rem 0',
                  borderBottom: i < facts.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.375rem' }}>
                  {f.heading}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(241,245,249,0.48)', lineHeight: 1.75, margin: 0 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
