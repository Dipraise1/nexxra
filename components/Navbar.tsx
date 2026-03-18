'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about' },
  { label: 'Industries',   href: '#industries' },
  { label: 'Process',      href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ─── Main nav bar ─── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        paddingTop: scrolled ? '0.875rem' : '1.5rem',
        transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: 'none',
      }}>
        <div className="container-center" style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          {/* Logo */}
          <a href="#" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, zIndex: 110, position: 'relative' }}>
            <img src="/logo-white.png" alt="Nexxra Digital" style={{ height: '34px', width: 'auto', display: 'block' }} />
          </a>

          {/* Center nav pill — desktop only */}
          <div className="show-lg" style={{
            background: scrolled ? 'rgba(5,8,20,0.92)' : 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.08)'}`,
            borderRadius: '9999px',
            padding: '0 2rem',
            height: '44px',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} style={{
                  fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div className="show-lg">
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: '38px', padding: '0 1.125rem',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: '#fff', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.02em', textDecoration: 'none',
                transition: 'filter 0.2s, transform 0.18s, box-shadow 0.25s',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Get Started
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <div className="hide-lg">
              <button
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                style={{
                  position: 'relative', zIndex: 110,
                  background: menuOpen ? 'rgba(255,255,255,0.08)' : 'rgba(5,8,20,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  width: '42px', height: '42px',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '5px',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
              >
                <span style={{
                  display: 'block', width: '18px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
                  transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block', width: '18px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'opacity 0.2s',
                  opacity: menuOpen ? 0 : 1,
                }} />
                <span style={{
                  display: 'block', width: '18px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                  transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Full-screen mobile overlay ─── */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 105,
          background: '#05080f',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Left gradient bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
          background: 'linear-gradient(180deg, #2563eb 0%, #7c3aed 100%)',
        }} />

        {/* Background texture orbs */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-20%', right: '-20%',
          width: '70vw', height: '70vw',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-10%', left: '10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Top bar (logo + close — handled by hamburger) */}
        <div style={{
          padding: '1.5rem 2rem 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <img src="/logo-white.png" alt="Nexxra Digital" style={{ height: '30px', width: 'auto', opacity: 0.7 }} />
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
            Menu
          </span>
        </div>

        {/* Navigation links */}
        <nav style={{
          flex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '2rem 2rem',
          gap: 0,
        }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1.25rem',
                padding: '1.1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                // Staggered appear — handled by parent opacity transition
                transitionDelay: menuOpen ? `${i * 0.04}s` : '0s',
              }}
              onMouseEnter={e => {
                const txt = e.currentTarget.querySelector('.link-text') as HTMLElement | null;
                if (txt) { txt.style.color = 'rgba(255,255,255,0.45)'; }
              }}
              onMouseLeave={e => {
                const txt = e.currentTarget.querySelector('.link-text') as HTMLElement | null;
                if (txt) { txt.style.color = '#f0f4ff'; }
              }}
            >
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.08em',
                fontFamily: 'monospace',
                flexShrink: 0,
                paddingBottom: '0.2rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="link-text"
                style={{
                  fontSize: 'clamp(1.875rem, 8vw, 3rem)',
                  fontWeight: 700,
                  color: '#f0f4ff',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                  transition: 'color 0.2s',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{
          padding: '1.5rem 2rem 3rem',
          flexShrink: 0,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem',
              width: '100%', padding: '1rem 1.5rem',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: '#fff', borderRadius: '14px',
              fontSize: '1rem', fontWeight: 700, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              marginBottom: '1.25rem',
            }}
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.22)' }}>
              hello@nexxradigital.com
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.22)' }}>
              Abuja, Nigeria
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
