'use client';

import { useEffect, useState } from 'react';
import { labelStyle, WHATSAPP } from './PageShell';

type Day = { iso: string; weekday: string; day: number; month: string; slots: string[] };

const WEEKDAY_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const SATURDAY_SLOTS = ['10:00', '11:00', '12:00', '13:00'];

/** Next 14 bookable days (Mon–Sat), starting tomorrow in Lagos time. */
function upcomingDays(): Day[] {
  const todayLagos = new Date().toLocaleDateString('en-CA', { timeZone: 'Africa/Lagos' });
  const cursor = new Date(`${todayLagos}T12:00:00Z`);
  const days: Day[] = [];
  while (days.length < 14) {
    cursor.setUTCDate(cursor.getUTCDate() + 1);
    const dow = cursor.getUTCDay();
    if (dow === 0) continue;
    days.push({
      iso: cursor.toISOString().slice(0, 10),
      weekday: cursor.toLocaleDateString('en-GB', { weekday: 'short', timeZone: 'UTC' }),
      day: cursor.getUTCDate(),
      month: cursor.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' }),
      slots: dow === 6 ? SATURDAY_SLOTS : WEEKDAY_SLOTS,
    });
  }
  return days;
}

function to12h(t: string) {
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

function longDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Google Calendar "add event" link; WAT is UTC+1 year-round. */
function calendarLink(iso: string, time: string) {
  const [h, m] = time.split(':').map(Number);
  const start = new Date(Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10), h - 1, m));
  const end = new Date(start.getTime() + 30 * 60_000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Discovery call with Nexxra Digital',
    dates: `${fmt(start)}/${fmt(end)}`,
    details: 'Free discovery call with Nexxra Digital. We will confirm the meeting link / number shortly.',
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

const CALL_TYPES = ['Google Meet', 'Phone call', 'WhatsApp call'];

export default function BookingForm() {
  // Computed after mount: the page is prerendered, so build-time dates would be stale.
  const [days, setDays] = useState<Day[]>([]);
  const [date, setDate] = useState('');
  useEffect(() => {
    const d = upcomingDays();
    setDays(d);
    setDate(d[0].iso);
  }, []);
  const [time, setTime] = useState('');
  const [callType, setCallType] = useState(CALL_TYPES[0]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', notes: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  const selectedDay = days.find(d => d.iso === date);
  const when = time ? `${longDate(date)}, ${to12h(time)}` : '';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!time) { setError('Please pick a time slot.'); return; }
    setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, callType, date: longDate(date), time: to12h(time) }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      setStatus('done');
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  const waText = encodeURIComponent(`Hi Nexxra, I just booked a discovery call for ${when} WAT (${callType}). My name is ${form.name}.`);

  if (status === 'done') {
    return (
      <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '20px', textAlign: 'center' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>You&apos;re booked in.</h2>
        <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '0.25rem' }}>{when} (WAT) · {callType}</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          We&apos;ll confirm by email at {form.email} within a few hours.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href={calendarLink(date, time)} target="_blank" rel="noopener noreferrer" className="btn-primary">Add to Google Calendar</a>
          <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Confirm faster on WhatsApp</a>
        </div>
      </div>
    );
  }

  if (!selectedDay) {
    return <div className="card" style={{ minHeight: '560px', borderRadius: '20px' }} aria-busy="true" />;
  }

  const chip = (active: boolean): React.CSSProperties => ({
    border: `1px solid ${active ? 'var(--ink)' : 'var(--line-2)'}`,
    background: active ? 'var(--dark)' : 'var(--surface-2)',
    color: active ? '#fff' : 'var(--ink)',
    borderRadius: '12px', cursor: 'pointer', fontFamily: 'inherit',
    transition: 'background 0.15s, border-color 0.15s, color 0.15s',
  });

  return (
    <form onSubmit={submit} className="card" style={{ padding: 'clamp(1.25rem, 4vw, 2.25rem)', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}>
      <div>
        <span style={labelStyle}>1 · Pick a day</span>
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.375rem', scrollSnapType: 'x mandatory' }}>
          {days.map(d => (
            <button type="button" key={d.iso} onClick={() => { setDate(d.iso); setTime(''); }}
              style={{ ...chip(d.iso === date), flex: '0 0 auto', width: '64px', padding: '0.625rem 0', textAlign: 'center', scrollSnapAlign: 'start' }}>
              <div style={{ fontSize: '0.6875rem', opacity: 0.7 }}>{d.weekday}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.2 }}>{d.day}</div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.7 }}>{d.month}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <span style={labelStyle}>2 · Pick a time (West Africa Time)</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))', gap: '0.5rem' }}>
          {selectedDay.slots.map(s => (
            <button type="button" key={s} onClick={() => setTime(s)} style={{ ...chip(s === time), padding: '0.625rem 0', fontSize: '0.875rem', fontWeight: 600 }}>
              {to12h(s)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span style={labelStyle}>3 · How should we call you?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {CALL_TYPES.map(c => (
            <button type="button" key={c} onClick={() => setCallType(c)} style={{ ...chip(c === callType), padding: '0.5rem 0.875rem', fontSize: '0.8125rem', fontWeight: 600, borderRadius: '999px' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label style={labelStyle} htmlFor="b-name">Full name *</label>
          <input id="b-name" required className="form-input" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="b-email">Email *</label>
          <input id="b-email" required type="email" className="form-input" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="b-phone">Phone / WhatsApp{callType !== 'Google Meet' ? ' *' : ''}</label>
          <input id="b-phone" required={callType !== 'Google Meet'} type="tel" className="form-input" placeholder="+234 800 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="b-company">Company</label>
          <input id="b-company" className="form-input" placeholder="Optional" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="b-service">What do you need?</label>
        <select id="b-service" className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ appearance: 'none', cursor: 'pointer' }}>
          <option value="">Select a service…</option>
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>Real Estate Platform</option>
          <option>SaaS Development</option>
          <option>Business Automation</option>
          <option>Digital Marketing</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="b-notes">Anything we should know?</label>
        <textarea id="b-notes" className="form-input" style={{ minHeight: '100px' }} placeholder="A sentence or two about your project, goals or deadline." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
      </div>

      {/* honeypot — hidden from people, filled by bots */}
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }} />

      {error && <p role="alert" style={{ fontSize: '0.875rem', color: '#dc2626' }}>{error}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ width: '100%', minHeight: '52px', fontSize: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Booking…' : time ? `Book ${to12h(time)}, ${selectedDay.weekday} ${selectedDay.day} ${selectedDay.month}` : 'Book my call'}
      </button>
    </form>
  );
}
