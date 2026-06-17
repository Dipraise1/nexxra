'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Process',  href: '#process' },
  { label: 'FAQs',     href: '#faq' },
];

function NavLink({ l, active, onClick }: { l: typeof links[number]; active: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const lit = hovered || active;
  return (
    <a
      href={l.href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '0.5rem 0.875rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: lit ? '#18181b' : '#6b6b73',
        transition: 'color 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {l.label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [hidden, setHidden]               = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 120) setHidden(y > lastY + 4);
      else setHidden(false);
      lastY = y;
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
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -55% 0px' }
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
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        background: scrolled ? 'rgba(242,241,238,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'padding 0.3s ease, background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div className="container-center" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#home" onClick={closeMenu} style={{ flexShrink: 0, zIndex: 110, position: 'relative' }}>
            <img src="/logo-dark.png" alt="Nexxra Digital" style={{ height: '46px', width: 'auto', display: 'block' }} />
          </a>

          {/* Center links — desktop */}
          <nav className="show-md" style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            alignItems: 'center', gap: '0.25rem',
          }}>
            {links.map(l => (
              <NavLink key={l.href} l={l} active={activeSection === l.href} />
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <a href="#contact" className="btn-primary show-md" style={{ minHeight: '40px', padding: '0 1.375rem', fontSize: '0.8125rem' }}>
              Contact
            </a>

            {/* Hamburger — mobile */}
            <button
              className="hide-md"
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
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#18181b', borderRadius: '2px', transition: 'transform 0.3s, opacity 0.2s', transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#18181b', borderRadius: '2px', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#18181b', borderRadius: '2px', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 105,
          background: 'var(--bg)',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
          display: 'flex', flexDirection: 'column',
        }}
      >
        <div style={{ height: '4.5rem', flexShrink: 0 }} />
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2rem' }}>
          {[...links, { label: 'Contact', href: '#contact' }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                padding: '1rem 0',
                borderBottom: '1px dashed var(--line-dash)',
                fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
                fontWeight: 600, color: '#18181b', letterSpacing: '-0.02em',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${menuOpen ? i * 0.06 : 0}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${menuOpen ? i * 0.06 : 0}s`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ padding: '1.5rem 2rem 3rem', flexShrink: 0, display: 'flex', justifyContent: 'space-between', color: 'var(--ink-3)', fontSize: '0.8125rem' }}>
          <span>hello@nexxradigitals.com</span>
          <span>Abuja, Nigeria</span>
        </div>
      </div>
    </>
  );
}
