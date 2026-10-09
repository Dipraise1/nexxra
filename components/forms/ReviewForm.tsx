'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { labelStyle } from './PageShell';

const RATING_WORDS = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: '', role: '', project: '', email: '', review: '', website: '' });
  const [canPublish, setCanPublish] = useState(true);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  // Personalised links: /review?name=Ada&project=Wayatix
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const name = q.get('name') ?? '';
    const project = q.get('project') ?? '';
    if (name || project) setForm(f => ({ ...f, name: f.name || name, project: f.project || project }));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) { setError('Please choose a star rating.'); return; }
    setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating, canPublish }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      setStatus('done');
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'done') {
    return (
      <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', color: '#f5b301', letterSpacing: '0.2em', marginBottom: '1rem' }}>{'★'.repeat(rating)}</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank you, {form.name.split(' ')[0]}!</h2>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          Your review means a lot to the team. We read every single one.
        </p>
        <Link href="/" className="btn-ghost">Back to nexxradigitals.com</Link>
      </div>
    );
  }

  const shown = hover || rating;

  return (
    <form onSubmit={submit} className="card" style={{ padding: 'clamp(1.25rem, 4vw, 2.25rem)', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ ...labelStyle, marginBottom: '0.75rem' }}>Your rating *</span>
        <div role="radiogroup" aria-label="Star rating" style={{ display: 'inline-flex', gap: '0.25rem' }} onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map(n => (
            <button key={n} type="button" role="radio" aria-checked={rating === n} aria-label={`${n} star${n > 1 ? 's' : ''}`}
              onClick={() => setRating(n)} onMouseEnter={() => setHover(n)}
              style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', color: n <= shown ? '#f5b301' : 'var(--line-2)', transition: 'color 0.15s, transform 0.15s', transform: n <= shown ? 'scale(1.08)' : 'none' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </button>
          ))}
        </div>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-2)', minHeight: '1.25rem' }}>{RATING_WORDS[shown]}</div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="r-review">Your review *</label>
        <textarea id="r-review" required className="form-input" placeholder="What did we build for you, and what was it like working with us? What changed for your business?" value={form.review} onChange={e => setForm({ ...form, review: e.target.value })} />
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label style={labelStyle} htmlFor="r-name">Your name *</label>
          <input id="r-name" required className="form-input" placeholder="Ada Obi" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="r-role">Role & company</label>
          <input id="r-role" className="form-input" placeholder="Founder, Acme Ltd" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="r-project">Project</label>
          <input id="r-project" className="form-input" placeholder="e.g. Company website" value={form.project} onChange={e => setForm({ ...form, project: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="r-email">Email (not published)</label>
          <input id="r-email" type="email" className="form-input" placeholder="Optional" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>

      <label style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--ink-2)', cursor: 'pointer', lineHeight: 1.5 }}>
        <input type="checkbox" checked={canPublish} onChange={e => setCanPublish(e.target.checked)} style={{ marginTop: '0.2rem', accentColor: 'var(--dark)', width: 16, height: 16 }} />
        Nexxra may show this review, with my name and role, on its website and social media.
      </label>

      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }} />

      {error && <p role="alert" style={{ fontSize: '0.875rem', color: '#dc2626' }}>{error}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ width: '100%', minHeight: '52px', fontSize: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Submit review'}
      </button>
    </form>
  );
}
