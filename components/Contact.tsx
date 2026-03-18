'use client';

import { useState } from 'react';

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Abuja, Federal Capital Territory, Nigeria',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+234 800 NEXXRA',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@nexxradigital.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon–Fri: 8am–6pm · Sat: 9am–2pm',
  },
];

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'rgba(240,244,255,0.38)',
  marginBottom: '0.5rem',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="sec" style={{ background: '#050814' }}>
      <div className="container-center">
        <div className="g-2t">

          {/* Left */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <span className="sec-label">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
                Get in touch
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.035em', marginBottom: '1.25rem',
              }}>
                Let&apos;s talk about<br />
                <span className="gradient-text">your project.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)', lineHeight: 1.85 }}>
                Reach out and we&apos;ll respond within 24 hours with a free project
                assessment. No sales pitch — just an honest conversation.
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                    padding: '1.125rem 1.25rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#93c5fd',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.28)', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9375rem', color: '#f0f4ff', fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="reveal"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(59,130,246,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top gradient border */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
            }} />

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 1.5rem',
                  background: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))',
                  border: '1px solid rgba(52,211,153,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#34d399',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 700, color: '#f0f4ff',
                  marginBottom: '0.75rem', letterSpacing: '-0.025em',
                }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.45)', lineHeight: 1.75 }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.375rem', fontWeight: 700, color: '#f0f4ff',
                    marginBottom: '0.25rem', letterSpacing: '-0.025em',
                  }}>
                    Get a Free Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.38)' }}>
                    No commitment · Response within 24 hours
                  </p>
                </div>

                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input required type="text" placeholder="John Doe" className="form-input"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" placeholder="john@company.com" className="form-input"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" placeholder="+234 800 000 0000" className="form-input"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>

                <div>
                  <label style={labelStyle}>Service Needed *</label>
                  <select required className="form-input" value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select a service...</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>Real Estate Platform</option>
                    <option>SaaS Development</option>
                    <option>Business Automation</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea required className="form-input"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" style={{
                  width: '100%', justifyContent: 'center',
                  padding: '0.875rem', fontSize: '1rem', minHeight: '52px',
                }}>
                  Send Message — Get Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p style={{ fontSize: '0.75rem', color: 'rgba(240,244,255,0.22)', textAlign: 'center' }}>
                  We never share your data.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
