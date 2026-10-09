import type { Metadata } from 'next';
import PageShell from '@/components/forms/PageShell';
import ReviewForm from '@/components/forms/ReviewForm';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Worked with Nexxra Digital? Tell us how it went.',
  alternates: { canonical: '/review' },
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  return (
    <PageShell>
      <section className="sec">
        <div className="container-center" style={{ maxWidth: '640px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="sec-label" style={{ justifyContent: 'center' }}><span className="dot" /> Client review</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: '1rem' }}>How did we do?</h1>
            <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.8 }}>
              Thank you for building with Nexxra. Your honest feedback helps us improve — and helps other businesses decide to work with us. It takes about two minutes.
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>
    </PageShell>
  );
}
