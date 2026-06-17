'use client';

const services = ['Website Development', 'Mobile Apps', 'SaaS Development', 'Business Automation', 'Real Estate Tech', 'Digital Marketing'];
const company = [
  { label: 'About',        href: '#about' },
  { label: 'Process',      href: '#process' },
  { label: 'Industries',   href: '#industries' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', width: '100%' }}>
      <div className="frame frame-pad dash-top" style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div className="reveal" style={{ maxWidth: '280px' }}>
            <img src="/logo-dark.png" alt="Nexxra Digital" style={{ height: '34px', width: 'auto', display: 'block', marginBottom: '1.125rem' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
              From pixels to production — an Abuja-based tech company building digital products for Nigerian businesses.
            </p>
          </div>

          {/* Services */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h4 style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)', marginBottom: '1.25rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map(s => (
                <a key={s} href="#services" style={{ fontSize: '0.875rem', color: 'var(--ink-2)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h4 style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)', marginBottom: '1.25rem' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {company.map(l => (
                <a key={l.label} href={l.href} style={{ fontSize: '0.875rem', color: 'var(--ink-2)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h4 style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)', marginBottom: '1.25rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { label: 'Email', value: 'hello@nexxradigitals.com' },
                { label: 'Phone', value: '+234 811 026 8093' },
                { label: 'Location', value: 'Abuja, FCT, Nigeria' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '0.125rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--ink)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-line" style={{ height: '1px', background: 'var(--line)', marginBottom: '1.5rem' }} />
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)' }}>© {new Date().getFullYear()} Nexxra Tech Innovations Limited · <a href="/cac-certificate.png" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>CAC Registered (RC 9472371)</a> · Abuja, Nigeria</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Twitter/X', 'LinkedIn', 'Instagram'].map(item => (
              <a key={item} href="#" style={{ fontSize: '0.75rem', color: 'var(--ink-3)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-3)')}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
