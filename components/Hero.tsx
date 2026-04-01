'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (marqueeRef.current) {
        const scrollY = window.scrollY;
        marqueeRef.current.style.transform = `translateX(${-scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        width: '100%',
        maxWidth: '100vw',
        position: 'relative',
        overflow: 'hidden',
        background: '#020509',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '8rem',
      }}
    >
      {/* Video background — fills the entire hero, sits behind content */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        overflow: 'hidden',
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.35,
          }}
        >
          <source src="/coverr-coding-on-a-laptop-2116-1080p.mp4" type="video/mp4" />
        </video>
        {/* Darkening overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(2,5,9,0.55) 0%, rgba(2,5,9,0.75) 100%)',
        }} />
      </div>

      {/* Animated gradient orbs — add depth & life */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '8%', right: '12%',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'orbitFloat 14s ease-in-out infinite',
          filter: 'blur(48px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%', left: '3%',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'orbitFloat2 18s ease-in-out infinite',
          filter: 'blur(56px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '55%', right: '35%',
          width: '240px', height: '240px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'orbitFloat 22s ease-in-out infinite reverse',
          filter: 'blur(36px)',
        }} />
      </div>

      <div className="container-center" style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div className="fade-in-up" style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.02em',
            color: 'rgba(240,244,255,0.4)',
          }}>
            Accepting new projects — Abuja, Nigeria
          </span>
        </div>

        {/* Main headline */}
        <h1 className="fade-in-up delay-100" style={{
          fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
          fontWeight: 700,
          lineHeight: 0.98,
          letterSpacing: '-0.045em',
          color: '#f0f4ff',
          marginBottom: '2.5rem',
          maxWidth: '900px',
        }}>
          We design &amp;
          <br />
          build digital
          <br />
          <span style={{
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(240,244,255,0.35)',
          }}>
            products.
          </span>
        </h1>

        {/* Supporting copy + CTAs */}
        <div className="fade-in-up delay-200" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'flex-end',
          marginBottom: '4rem',
        }}>
          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(240,244,255,0.45)',
            lineHeight: 1.8,
            maxWidth: '420px',
          }}>
            Websites, mobile apps, SaaS platforms, and business automation — 
            built by a real team in Abuja, delivered on time, and actually maintained after launch.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="#contact" className="btn-primary">
              Start a project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn-ghost-white">
              Our services
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-in-up delay-300" style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
        }}>
          {[
            { value: '0', label: 'Projects shipped' },
            { value: '0', label: 'Clients served' },
            { value: '0', label: 'In business' },
            { value: '0%', label: 'On-time delivery' },
          ].map((s) => (
            <div key={s.label} style={{ minWidth: '100px' }}>
              <div style={{
                fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em',
                color: '#f0f4ff', lineHeight: 1, marginBottom: '0.375rem',
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: '0.75rem', color: 'rgba(240,244,255,0.28)',
                fontWeight: 500, letterSpacing: '0.02em',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large scrolling text strip at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: 0,
        right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <div
          ref={marqueeRef}
          style={{
            display: 'flex',
            gap: '4rem',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(6rem, 14vw, 12rem)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.85,
            color: 'rgba(255,255,255,0.18)',
            userSelect: 'none',
            paddingBottom: '0.5rem',
          }}
        >
          <span>NEXXRA DIGITAL</span>
          <span>·</span>
          <span>NEXXRA DIGITAL</span>
          <span>·</span>
          <span>NEXXRA DIGITAL</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to top, #050814, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />
    </section>
  );
}
