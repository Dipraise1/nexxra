import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER || 'hey@nexxradigitals.com';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!process.env.SMTP_PASS) throw new Error('SMTP_PASS is not configured');
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user: SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter;
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

/** Render label/value rows as a simple HTML table + plain-text fallback. */
function render(title: string, rows: [string, string][]) {
  const filled = rows.filter(([, v]) => v);
  const html = `<div style="font-family:Arial,sans-serif;color:#141417">
    <h2 style="margin:0 0 16px">${escapeHtml(title)}</h2>
    <table cellpadding="8" style="border-collapse:collapse">${filled
      .map(([k, v]) => `<tr><td style="color:#8d8d96;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
      .join('')}</table></div>`;
  const text = `${title}\n\n${filled.map(([k, v]) => `${k}: ${v}`).join('\n')}`;
  return { html, text };
}

export async function sendNotification(opts: { subject: string; title: string; rows: [string, string][]; replyTo?: string }) {
  const { html, text } = render(opts.title, opts.rows);
  await getTransporter().sendMail({
    from: `"Nexxra Website" <${SMTP_USER}>`,
    to: MAIL_TO,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
    html,
  });
}

/** Trim a form field to a string with a max length; non-strings become ''. */
export function field(v: unknown, max = 200) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
