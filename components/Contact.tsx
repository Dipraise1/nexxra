'use client';

import { useState } from 'react';

const iconProps = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.75', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const contactItems = [
  { icon: <svg {...iconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, label: 'Location', value: 'Abuja, Federal Capital Territory, Nigeria' },
  { icon: <svg {...iconProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.91 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" /></svg>, label: 'Phone', value: '+234 811 026 8093' },
  { icon: <svg {...iconProps}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, label: 'Email', value: 'hello@nexxradigitals.com' },
  { icon: <svg {...iconProps}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Business Hours', value: 'Mon–Fri: 8am–6pm · Sat: 9am–2pm' },
];

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.625rem', fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '0.08em',
  color: 'var(--ink-3)', marginBottom: '0.5rem',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="sec dash-bottom" style={{ background: 'var(--bg)' }}>
      <div className="frame frame-pad">
        <div className="g-2t">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            <div className="reveal-left">
              <span className="sec-label"><span className="dot" /> Get in touch</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.125rem' }}>
                Let&apos;s talk about your project.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>
                Reach out and we&apos;ll respond within 24 hours with a free project assessment. No sales pitch — just an honest conversation.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactItems.map((item, i) => (
                <div key={item.label} className="reveal" style={{ transitionDelay: `${0.1 + i * 0.07}s`, display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <div className="icon-box" style={{ width: '36px', height: '36px', borderRadius: '10px', marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--ink)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-blur card" style={{ transitionDelay: '0.15s', padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '20px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>Message sent!</h3>
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.25rem' }}>Get a Free Quote</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>No commitment · Response within 24 hours</p>
                </div>

                <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="form-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" placeholder="john@company.com" className="form-input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" placeholder="+234 800 000 0000" className="form-input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>

                <div>
                  <label style={labelStyle}>Service Needed *</label>
                  <select required className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ appearance: 'none', cursor: 'pointer' }}>
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
                  <textarea required className="form-input" placeholder="Tell us about your project, goals, and any specific requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', minHeight: '52px' }}>
                  Send Message
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--ink-3)', textAlign: 'center' }}>We never share your data.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
