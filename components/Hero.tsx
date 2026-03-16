'use client';

const stats = [
  { value: '50+',  label: 'Projects delivered' },
  { value: '30+',  label: 'Clients served' },
  { value: '3 yrs', label: 'In operation' },
  { value: '100%', label: 'On-time delivery' },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#030712',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Very subtle orb — not a feature, just warmth */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-20%', left: '-15%',
        width: '70vw', height: '70vw',
        maxWidth: '600px', maxHeight: '600px',
        background: 'radial-gradient(circle, rgba(26,58,143,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-center" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(4rem, 8vw, 7rem)',
          alignItems: 'center',
        }}>

          {/* ── LEFT ── */}
          <div className="fade-in-up">
            {/* Location badge — no ping dot, just text */}
            <div style={{ marginBottom: '2rem' }}>
              <span style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(241,245,249,0.35)',
              }}>
                Abuja, Nigeria · CAC Registered
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#f1f5f9',
              marginBottom: '1.5rem',
            }}>
              We build digital products for Nigerian businesses.
            </h1>

            <p style={{
              fontSize: '1rem',
              color: 'rgba(241,245,249,0.52)',
              lineHeight: 1.8,
              maxWidth: '38rem',
              marginBottom: '2.5rem',
            }}>
              Nexxra Digital is an Abuja-based tech company. We build websites, mobile apps,
              SaaS platforms, and automation tools — and we take pride in delivering every
              project on time.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '4rem' }}>
              <a href="#contact" className="btn-primary">
                Start a project
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#services" className="btn-ghost-white">
                See our work
              </a>
            </div>

            {/* Stats — plain, no gradient */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: i < stats.length - 1 ? '1.25rem' : '0',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingLeft: i > 0 ? '1.25rem' : '0',
                }}>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#f1f5f9',
                    lineHeight: 1.1,
                    marginBottom: '0.25rem',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.625rem', color: 'rgba(241,245,249,0.3)', fontWeight: 500, letterSpacing: '0.03em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: code block, no ornamentation ── */}
          <div className="fade-in-up delay-300">
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top shimmer line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.5), rgba(74,28,150,0.5), transparent)',
              }} />

              <div style={{ display: 'flex', gap: '5px', marginBottom: '1.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', opacity: 0.7 }} />
              </div>

              <div style={{
                fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace',
                fontSize: '0.8125rem',
                lineHeight: 2.1,
                color: '#64748b',
              }}>
                <div><span style={{ color: '#7c3aed' }}>const</span>{' '}<span style={{ color: '#93c5fd' }}>nexxra</span>{' '}<span style={{ color: '#64748b' }}>=</span>{' '}<span>{'{'}</span></div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>mission</span><span>:{' '}</span><span style={{ color: '#34d399' }}>&apos;Scale African Tech&apos;</span><span>,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>quality</span><span>:{' '}</span><span style={{ color: '#34d399' }}>&apos;Uncompromising&apos;</span><span>,</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>status</span><span>:{' '}</span><span style={{ color: '#a78bfa' }}>&apos;Innovating&apos;</span>
                </div>
                <div><span>{'};'}</span></div>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '1.75rem 0' }} />

              {/* Simple service list — no pills, just text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Website Development',
                  'Mobile Apps',
                  'SaaS Platforms',
                  'Business Automation',
                  'Real Estate Tech',
                  'Digital Marketing',
                ].map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(26,58,143,0.8)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'rgba(241,245,249,0.45)', fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
