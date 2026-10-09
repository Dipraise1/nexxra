import { NextResponse } from 'next/server';
import { sendNotification, field, EMAIL_RE } from '@/lib/mail';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (field(body.website)) return NextResponse.json({ ok: true }); // honeypot

  const name = field(body.name, 100);
  const email = field(body.email, 150);
  const phone = field(body.phone, 40);
  const company = field(body.company, 120);
  const service = field(body.service, 80);
  const callType = field(body.callType, 40);
  const date = field(body.date, 40);
  const time = field(body.time, 20);
  const notes = field(body.notes, 3000);

  if (!name || !EMAIL_RE.test(email) || !date || !time) {
    return NextResponse.json({ ok: false, error: 'Please fill in your name, a valid email, and pick a time.' }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `📅 Call request: ${name} — ${date}, ${time}`,
      title: 'New discovery call request',
      replyTo: email,
      rows: [
        ['When', `${date}, ${time} (WAT)`],
        ['Call via', callType],
        ['Name', name],
        ['Email', email],
        ['Phone', phone],
        ['Company', company],
        ['Interested in', service],
        ['Notes', notes],
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('book: send failed', err);
    return NextResponse.json({ ok: false, error: 'We could not send your request. Please message us on WhatsApp instead.' }, { status: 500 });
  }
}
