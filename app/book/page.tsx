import type { Metadata } from 'next';
import PageShell from '@/components/forms/PageShell';
import BookingForm from '@/components/forms/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description: 'Pick a time for a free 30-minute call with Nexxra Digital. We talk through your goals, timeline and budget — no hard sell.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <PageShell>
      <section className="sec">
        <div className="container-center">
          <div className="g-2t">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}>
              <span className="sec-label" style={{ alignSelf: 'flex-start', marginBottom: 0 }}><span className="dot" /> Free · 30 minutes</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.05 }}>Book a discovery call.</h1>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>
                Pick a time that works for you. We&apos;ll talk through your goals, timeline and budget, and you&apos;ll leave with an honest view of what it takes to build — whether or not we work together.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--ink)' }}>
                {['Google Meet, phone or WhatsApp — your choice', 'We confirm your slot within a few hours', 'A written proposal within 48 hours after the call'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
