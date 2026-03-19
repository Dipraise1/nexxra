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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(5,8,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div className="container-center" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" onClick={closeMenu} style={{ flexShrink: 0, zIndex: 110, position: 'relative' }}>
            <img src="/logo-white.png" alt="Nexxra Digital" style={{ height: '28px', width: 'auto', display: 'block' }} />
          </a>

          {/* Center links — desktop */}
          <nav className="show-md" style={{
            display: 'flex', alignItems: 'center', gap: '2.25rem',
          }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{
                fontSize: '0.8125rem', fontWeight: 500,
                color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div className="show-md">
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: '36px', padding: '0 1.25rem',
                background: '#fff',
                color: '#050814',
                borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                Get Started
              </a>
            </div>

            {/* Hamburger — mobile */}
            <div className="hide-md">
              <button
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                style={{
                  position: 'relative', zIndex: 110,
                  background: 'transparent',
                  border: 'none',
                  width: '42px', height: '42px',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '6px',
                }}
              >
                <span style={{
                  display: 'block', width: '20px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'transform 0.3s ease, opacity 0.2s',
                  transform: menuOpen ? 'translateY(7.5px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block', width: '20px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'opacity 0.2s',
                  opacity: menuOpen ? 0 : 1,
                }} />
                <span style={{
                  display: 'block', width: '20px', height: '1.5px',
                  background: '#fff', borderRadius: '1px',
                  transition: 'transform 0.3s ease',
                  transform: menuOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
                }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile menu overlay ─── */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 105,
          background: '#050814',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Top spacer to clear the header */}
        <div style={{ height: '5rem', flexShrink: 0 }} />

        {/* Nav links */}
        <nav style={{
          flex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 2rem',
        }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                display: 'block',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
                fontWeight: 600,
                color: '#f0f4ff',
                letterSpacing: '-0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#f0f4ff')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{
          padding: '1.5rem 2rem 3rem',
          flexShrink: 0,
        }}>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem',
              width: '100%', padding: '1rem',
              background: '#fff',
              color: '#050814',
              borderRadius: '10px',
              fontSize: '1rem', fontWeight: 600, textDecoration: 'none',
              marginBottom: '1rem',
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
