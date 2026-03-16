'use client';

import { useState } from 'react';

const contactItems = [
  { label: 'Location', value: 'Abuja, Federal Capital Territory, Nigeria' },
  { label: 'Phone', value: '+234 800 NEXXRA' },
  { label: 'Email', value: 'hello@nexxradigital.com' },
  { label: 'Business Hours', value: 'Mon–Fri: 8am–6pm · Sat: 9am–2pm' },
];

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'rgba(241,245,249,0.4)',
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
    <section id="contact" className="sec" style={{ background: '#030712', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      <div className="container-center">
        <div className="g-2t">

          {/* ── Left: Info ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}>
                Let&apos;s talk about<br />your project
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(241,245,249,0.55)', lineHeight: 1.8 }}>
                Reach out and we&apos;ll respond within 24 hours with a free project
                assessment. No sales pitch — just an honest conversation about what you need.
              </p>
            </div>

            {/* Contact items — plain list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: '1rem 0',
                    borderBottom: i < contactItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.3)', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: '#f1f5f9', fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form Card ── */}
          <div
            className="reveal"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 1.5rem',
                  background: 'rgba(52,211,153,0.08)',
                  border: '1px solid rgba(52,211,153,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#34d399',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(241,245,249,0.5)', lineHeight: 1.75 }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                    Get a Free Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(241,245,249,0.4)' }}>No commitment · Response within 24 hours</p>
                </div>

                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    required type="text" placeholder="John Doe"
                    className="form-input"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    required type="email" placeholder="john@company.com"
                    className="form-input"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel" placeholder="+234 800 000 0000"
                    className="form-input"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service Needed *</label>
                  <select
                    required className="form-input"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ appearance: 'none', cursor: 'pointer' }}
                  >
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
                  <textarea
                    required
                    className="form-input"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', fontSize: '1rem' }}>
                  Send Message — Get Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p style={{ fontSize: '0.75rem', color: 'rgba(241,245,249,0.25)', textAlign: 'center' }}>
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
