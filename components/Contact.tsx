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
              <p style={{
                fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
                color: 'rgba(240,244,255,0.35)', marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}>
                Get in touch
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.035em', marginBottom: '1.25rem',
              }}>
                Let&apos;s talk about<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,244,255,0.35)' }}>
                  your project.
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.4)', lineHeight: 1.85 }}>
                Reach out and we&apos;ll respond within 24 hours with a free project
                assessment. No sales pitch — just an honest conversation.
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactItems.map((item) => (
                <div key={item.label}>
                  <div style={{
                    fontSize: '0.625rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(240,244,255,0.25)', marginBottom: '0.25rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: '#f0f4ff', fontWeight: 500 }}>
                    {item.value}
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
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 700, color: '#f0f4ff',
                  marginBottom: '0.75rem', letterSpacing: '-0.025em',
                }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.4)', lineHeight: 1.75 }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem', fontWeight: 700, color: '#f0f4ff',
                    marginBottom: '0.25rem', letterSpacing: '-0.02em',
                  }}>
                    Get a Free Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.35)' }}>
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
                  Send Message
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
