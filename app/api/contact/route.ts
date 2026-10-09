import { NextResponse } from 'next/server';
import { sendNotification, field, EMAIL_RE } from '@/lib/mail';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (field(body.website)) return NextResponse.json({ ok: true }); // honeypot

  const name = field(body.name, 100);
  const email = field(body.email, 150);
  const phone = field(body.phone, 40);
  const service = field(body.service, 80);
  const message = field(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !service || !message) {
    return NextResponse.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `✉️ Quote request: ${name} — ${service}`,
      title: 'New quote request',
      replyTo: email,
      rows: [['Name', name], ['Email', email], ['Phone', phone], ['Service', service], ['Project details', message]],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact: send failed', err);
    return NextResponse.json({ ok: false, error: 'We could not send your message. Please email or WhatsApp us instead.' }, { status: 500 });
  }
}
