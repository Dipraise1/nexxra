import { NextResponse } from 'next/server';
import { sendNotification, field, EMAIL_RE } from '@/lib/mail';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (field(body.website)) return NextResponse.json({ ok: true }); // honeypot

  const name = field(body.name, 100);
  const email = field(body.email, 150);
  const role = field(body.role, 150);
  const project = field(body.project, 150);
  const review = field(body.review, 3000);
  const rating = Number(body.rating);
  const canPublish = body.canPublish === true;

  if (!name || !review || !(rating >= 1 && rating <= 5) || (email && !EMAIL_RE.test(email))) {
    return NextResponse.json({ ok: false, error: 'Please add your name, a star rating, and your review.' }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `⭐ ${rating}/5 review from ${name}`,
      title: 'New client review',
      replyTo: email || undefined,
      rows: [
        ['Rating', `${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)`],
        ['Name', name],
        ['Role / company', role],
        ['Project', project],
        ['Email', email],
        ['OK to publish', canPublish ? 'Yes' : 'No — keep private'],
        ['Review', review],
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('review: send failed', err);
    return NextResponse.json({ ok: false, error: 'We could not send your review. Please try again shortly.' }, { status: 500 });
  }
}
