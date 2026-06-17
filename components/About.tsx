'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '48hr', label: 'Proposal Delivery' },
  { value: '30d',  label: 'Free Support' },
  { value: '100%', label: 'On-Time' },
];

const iconProps = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.75', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const facts = [
  { icon: <svg {...iconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, heading: 'Based in Abuja', body: 'Headquartered in the FCT — we can meet in person when it matters.' },
  { icon: <svg {...iconProps}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>, heading: 'CAC Registered', body: <>A proper company, not a freelance collective. Nexxra Tech Innovations Limited, <a href="/cac-certificate.png" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>RC 9472371</a>.</> },
  { icon: <svg {...iconProps}><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>, heading: 'Post-launch support', body: 'Ongoing support, and we treat long-term clients differently.' },
  { icon: <svg {...iconProps}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>, heading: 'Global standards', body: 'International engineering quality with deep local market knowledge.' },
];

function Stat({ value, label }: { value: string; label: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/) || ['', '', value, ''];
  const prefix = m[1];
  const target = parseInt(m[2] || '0', 10);
  const suffix = m[3];
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        io.disconnect();
        if (reduce) { setN(target); return; }
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ flex: 1 }}>
      <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'var(--font-heading, Syne, sans-serif)', letterSpacing: '-0.02em' }}>
        {prefix}{n}{suffix}
      </div>
      <div style={{ fontSize: '0.6875rem', color: 'var(--ink-3)', fontWeight: 500, letterSpacing: '0.02em' }}>{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad">
        <div className="g-2t">

          {/* Left */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            <div>
              <span className="eyebrow"><span className="dot" /> About us</span>
              <h2 style={{ fontSize: 'clamp(1.85rem, 4.2vw, 2.9rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '1.125rem', letterSpacing: '-0.035em' }}>
                Built in Abuja,<br />for <span className="brand-grad">Nigeria.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Nexxra Digital is a technology company headquartered in Abuja. We build websites, mobile apps, SaaS platforms, and automation systems for businesses that need digital infrastructure they can rely on.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>
                We work with startups, SMEs, and established companies across Nigeria — from simple business websites to full-scale enterprise platforms.
              </p>
            </div>

            <div style={{ display: 'flex', borderTop: '1px dashed var(--line-dash)', paddingTop: '1.5rem' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ flex: 1, minWidth: 0, paddingLeft: i > 0 ? '1rem' : 0, borderLeft: i > 0 ? '1px dashed var(--line-dash)' : 'none' }}>
                  <Stat value={s.value} label={s.label} />
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn-primary">Work with us</a>
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', transitionDelay: '0.12s' }}>
            <div className="about-media">
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '18px', overflow: 'hidden', height: '240px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-pop)' }}>
                <img
                  src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?auto=format&fit=crop&w=1100&q=80"
                  alt="Nexxra Digital team, Abuja Nigeria"
                  loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.92)', padding: '0.375rem 0.75rem', borderRadius: '9999px', boxShadow: 'var(--shadow-card)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>Abuja, Nigeria</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {facts.map(f => (
                <div key={f.heading} className="card fact-card" style={{ padding: '1.125rem 1.125rem 1.125rem 1.375rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="icon-box" style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'var(--accent-soft)', borderColor: 'rgba(58,92,255,0.2)', color: 'var(--accent)' }}>{f.icon}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>{f.heading}</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
