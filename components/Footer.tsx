'use client';

const services = [
  'Website Development',
  'Mobile Apps',
  'SaaS Development',
  'Business Automation',
  'Real Estate Tech',
  'Digital Marketing',
];

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#050814', width: '100%' }}>

      {/* Big footer CTA strip */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0',
      }}>
        <div className="container-center" style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: '2rem',
        }}>
          <div className="reveal-left">
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              fontWeight: 700, color: '#f0f4ff', letterSpacing: '-0.03em',
              lineHeight: 1.15, marginBottom: '0.5rem',
            }}>
              Have a project in mind?
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.35)' }}>
              Let&apos;s talk about it — no commitment required.
            </p>
          </div>
          <div className="reveal-right" style={{ transitionDelay: '0.1s' }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', minHeight: '50px', padding: '0 2rem' }}>
              Get in touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-center" style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* Brand */}
          <div className="reveal" style={{ gridColumn: 'span 1' }}>
            <img
              src="/logo-black.png"
              alt="Nexxra Digital"
              style={{ height: '40px', width: 'auto', display: 'block', opacity: 0.7, marginBottom: '1.25rem' }}
            />
            <p style={{
              fontSize: '0.875rem', color: 'rgba(240,244,255,0.28)',
              lineHeight: 1.85, maxWidth: '260px',
            }}>
              Abuja-based tech company building digital products for Nigerian businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h4 style={{
              fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', marginBottom: '1.25rem',
            }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {links.map((l) => (
                <a key={l.label} href={l.href} style={{
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h4 style={{
              fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', marginBottom: '1.25rem',
            }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map((s) => (
                <a key={s} href="#services" style={{
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h4 style={{
              fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', marginBottom: '1.25rem',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { label: 'Email', value: 'hello@nexxradigital.com' },
                { label: 'Phone', value: '+234 800 NEXXRA' },
                { label: 'Location', value: 'Abuja, FCT, Nigeria' },
                { label: 'Hours', value: 'Mon–Fri · 8am–6pm' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{
                    fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', marginBottom: '0.125rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.38)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="reveal-line"
          style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}
        />
        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.16)' }}>
            © {new Date().getFullYear()} Nexxra Digital Technologies · CAC Registered · Abuja, Nigeria
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Twitter/X', 'LinkedIn', 'Instagram'].map((item) => (
              <a key={item} href="#" style={{
                fontSize: '0.75rem', color: 'rgba(255,255,255,0.16)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.16)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
