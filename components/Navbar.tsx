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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingTop: scrolled ? '1rem' : '1.5rem',
        transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
      }}
    >
      <div
        className="container-center"
        style={{
          width: '100%',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* ── Logo ── */}
        <a href="#" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/logo-white.png"
            alt="Nexxra Digital"
            style={{
              height: '36px',
              width: 'auto',
              display: 'block',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </a>

        {/* ── Center Nav Pill — Desktop ── */}
        <div
          className="show-lg"
          style={{
            background: scrolled ? 'rgba(3,7,18,0.9)' : 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            padding: '0 2.5rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none',
            display: 'flex',
            alignItems: 'center',
            height: '46px',
          }}
        >
          <nav style={{ gap: '2.25rem', display: 'flex', alignItems: 'center' }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Right: CTA + Hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div className="show-lg">
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                padding: '0 1.25rem',
                background: 'linear-gradient(135deg, #1a3a8f 0%, #4a1c96 100%)',
                color: '#fff',
                border: '2px dashed rgba(255,255,255,0.22)',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '-4px -2px 16px rgba(26,58,143,0.6), 4px 4px 16px rgba(74,28,150,0.6), 0 10px 28px rgba(40,20,120,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started
            </a>
          </div>

          {/* Hamburger */}
          <div className="hide-lg">
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                background: 'rgba(3,7,18,0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '0.5625rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                transition: 'border-color 0.2s',
              }}
            >
              <span style={{
                display: 'block', width: '20px', height: '2px',
                background: 'rgba(255,255,255,0.8)', borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '20px', height: '2px',
                background: 'rgba(255,255,255,0.8)', borderRadius: '1px',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.2s',
              }} />
              <span style={{
                display: 'block', width: '20px', height: '2px',
                background: 'rgba(255,255,255,0.8)', borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div
          style={{
            maxWidth: 'calc(100vw - 2.5rem)',
            margin: '0.5rem auto 0',
            background: 'rgba(3,7,18,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '1rem',
            boxShadow: '0 24px 50px -12px rgba(0,0,0,0.7)',
            pointerEvents: 'auto',
            // Top gradient line
            outline: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top gradient accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
          }} />

          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '0.875rem 0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {l.label}
              </a>
            ))}
            <div style={{ paddingTop: '1rem' }}>
              <a
                href="#contact"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0.875rem',
                  background: 'linear-gradient(135deg, #1a3a8f 0%, #4a1c96 100%)',
                  color: '#fff',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
