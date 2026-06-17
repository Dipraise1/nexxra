'use client';

const tools = [
  'Next.js', 'React', 'React Native', 'Flutter',
  'Node.js', 'Firebase', 'Supabase', 'MongoDB',
  'TypeScript', 'Tailwind CSS',
];

function Mark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="8.5" x2="22" y2="15.5" />
      <line x1="22" y1="8.5" x2="2" y2="15.5" />
    </svg>
  );
}

export default function PhotoStrip() {
  const loop = [...tools, ...tools];
  return (
    <section className="sec-sm" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="sec-hd" style={{ marginBottom: '2.5rem' }}>
          <h2>The Tools Behind Our Magic</h2>
          <p>We use the latest frameworks and tools to deliver fast, secure, and scalable digital experiences.</p>
        </div>

        <div className="marquee-mask">
          <div className="marquee-track" style={{ gap: '3rem' }}>
            {loop.map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.55rem',
                color: 'var(--ink-2)', whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                <Mark />
                <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
