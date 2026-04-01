'use client';

import { useState, useEffect } from 'react';

const links = [
  { num: '01', label: 'Services',     href: '#services' },
  { num: '02', label: 'About',        href: '#about' },
  { num: '03', label: 'Industries',   href: '#industries' },
  { num: '04', label: 'Process',      href: '#process' },
  { num: '05', label: 'Testimonials', href: '#testimonials' },
  { num: '06', label: 'Contact',      href: '#contact' },
];

function NavLink({ l, active }: { l: typeof links[number]; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  const lit = hovered || active;

  return (
    <a
      href={l.href}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.5rem 0.875rem',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        fontSize: '0.5625rem',
        fontWeight: 600,
        fontFamily: 'monospace',
        letterSpacing: '0.04em',
        color: lit ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)',
        transition: 'color 0.2s',
        lineHeight: 1,
      }}>
        {l.num}
      </span>
      <span style={{
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: active ? '#fff' : lit ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
        transition: 'color 0.2s',
        whiteSpace: 'nowrap',
      }}>
        {l.label}
      </span>
      {/* Sliding underline */}
      <span style={{
        position: 'absolute',
        bottom: '2px',
        left: '0.875rem',
        right: '0.875rem',
        height: '1px',
        background: active
          ? 'linear-gradient(90deg, #3b82f6, #7c3aed)'
          : 'rgba(255,255,255,0.35)',
        transform: lit ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.28s cubic-bezier(0.22,1,0.36,1)',
        borderRadius: '1px',
      }} />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [hidden, setHidden]                 = useState(false);
  const [menuOpen, setMenuOpen]             = useState(false);
  const [activeSection, setActiveSection]   = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 48);
      // hide on scroll down, show on scroll up — only past the hero
      if (y > 120) {
        setHidden(y > lastY + 4);
      } else {
        setHidden(false);
      }
      lastY = y;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
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
        padding: scrolled ? '0.625rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(5,8,20,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'padding 0.3s ease, background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div className="container-center" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" onClick={closeMenu} style={{ flexShrink: 0, zIndex: 110, position: 'relative' }}>
            <img src="/logo-black.png" alt="Nexxra Digital" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </a>

          {/* Center links — desktop only */}
          <nav className="show-md" style={{ display: 'flex', alignItems: 'center' }}>
            {links.slice(0, 3).map(l => (
              <NavLink key={l.href} l={l} active={activeSection === l.href} />
            ))}

            {/* Divider */}
            <span style={{
              width: '1px', height: '14px',
              background: 'rgba(255,255,255,0.1)',
              flexShrink: 0, margin: '0 0.25rem',
            }} />

            {links.slice(3).map(l => (
              <NavLink key={l.href} l={l} active={activeSection === l.href} />
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div className="show-md">
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.4rem',
                height: '36px', padding: '0 1.125rem',
                background: '#fff',
                color: '#050814',
                borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get Started
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Hamburger — mobile */}
            <div className="hide-md">
              <button
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                style={{
                  position: 'relative', zIndex: 110,
                  background: 'transparent', border: 'none',
                  width: '42px', height: '42px', cursor: 'pointer',
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

        {/* Scroll progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          height: '1px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #3b82f6 0%, #7c3aed 100%)',
          transition: 'width 0.15s linear',
          opacity: scrolled ? 1 : 0,
          pointerEvents: 'none',
        }} />
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
        <div style={{ height: '5rem', flexShrink: 0 }} />

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
                display: 'flex', alignItems: 'baseline', gap: '0.75rem',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${menuOpen ? i * 0.06 : 0}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${menuOpen ? i * 0.06 : 0}s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{
                fontSize: '0.625rem', fontWeight: 600, fontFamily: 'monospace',
                color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em',
              }}>
                {l.num}
              </span>
              <span style={{
                fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
                fontWeight: 600, color: '#f0f4ff', letterSpacing: '-0.02em',
              }}>
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div style={{ padding: '1.5rem 2rem 3rem', flexShrink: 0 }}>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem',
              width: '100%', padding: '1rem',
              background: '#fff', color: '#050814',
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
