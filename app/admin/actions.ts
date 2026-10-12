'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { requireAdmin, endSession } from '@/lib/admin-auth';
import {
  createDraft, getInvoice, updateInvoice, setStatus, deleteDraft, saveSettings, getSettings,
  totals, money, fmtDate, type InvoiceInput, type Status, type Settings,
} from '@/lib/invoices';
import { sendMail, escapeHtml, EMAIL_RE } from '@/lib/mail';
import { invoicePdf } from '@/lib/invoice-pdf';

// ── Auth ──────────────────────────────────────────────────────────────────────
export async function logout() {
  await endSession();
  redirect('/admin/login');
}

// ── Invoices ──────────────────────────────────────────────────────────────────
export async function newInvoice() {
  await requireAdmin();
  const inv = await createDraft();
  redirect(`/admin/invoices/${inv.id}`);
}

export async function duplicateInvoice(id: string) {
  await requireAdmin();
  const src = await getInvoice(id);
  if (!src) return;
  const inv = await createDraft(src);
  redirect(`/admin/invoices/${inv.id}`);
}

export async function saveInvoice(id: string, input: InvoiceInput) {
  await requireAdmin();
  await updateInvoice(id, input);
  revalidatePath('/admin');
  revalidatePath(`/admin/invoices/${id}`);
  return { ok: true };
}

export async function changeStatus(id: string, status: Status) {
  await requireAdmin();
  await setStatus(id, status);
  revalidatePath('/admin');
  revalidatePath(`/admin/invoices/${id}`);
}

export async function removeDraft(id: string) {
  await requireAdmin();
  await deleteDraft(id);
  revalidatePath('/admin');
  redirect('/admin');
}

/** Email the invoice link to the client and mark it sent. */
export async function emailInvoice(id: string, message: string) {
  await requireAdmin();
  const inv = await getInvoice(id);
  if (!inv) return { ok: false, error: 'Invoice not found.' };
  if (!EMAIL_RE.test(inv.clientEmail)) return { ok: false, error: 'Add a valid client email and save first.' };
  if (inv.status === 'void') return { ok: false, error: 'This invoice is void.' };

  const s = await getSettings();
  const h = await headers();
  const origin = `${h.get('x-forwarded-proto') || 'https'}://${h.get('host')}`;
  const url = `${origin}/invoice/${inv.publicToken}`;
  const total = money(totals(inv).total, inv.currency);
  const greet = inv.clientName ? `Hi ${inv.clientName.split(' ')[0]},` : 'Hello,';
  const note = message.trim().slice(0, 2000);

  const html = `<div style="font-family:Arial,sans-serif;color:#141417;max-width:560px">
    <div style="height:5px;background:linear-gradient(90deg,#3a5cff,#6d4bff);border-radius:4px"></div>
    <p style="font-size:15px;margin:24px 0 12px">${escapeHtml(greet)}</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px">${note ? escapeHtml(note).replace(/\n/g, '<br>') : `Please find invoice <b>${escapeHtml(inv.number)}</b> from ${escapeHtml(s.companyName)} below.`}</p>
    <table cellpadding="10" style="border-collapse:collapse;background:#f4f5ff;border-radius:12px;width:100%;font-size:14px">
      <tr><td style="color:#5f5f68">Invoice</td><td style="text-align:right"><b>${escapeHtml(inv.number)}</b></td></tr>
      <tr><td style="color:#5f5f68">Amount due</td><td style="text-align:right"><b>${escapeHtml(total)}</b></td></tr>
      <tr><td style="color:#5f5f68">Due date</td><td style="text-align:right"><b>${escapeHtml(fmtDate(inv.dueDate))}</b></td></tr>
    </table>
    <p style="margin:24px 0"><a href="${url}" style="background:#0b0b0d;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px">View &amp; download invoice</a></p>
    <p style="font-size:13px;color:#8d8d96;line-height:1.6">The PDF is attached. Payment details are on the invoice. Please use <b>${escapeHtml(inv.number)}</b> as your reference.<br>${escapeHtml(s.companyName)} · ${escapeHtml(s.companyEmail)} · ${escapeHtml(s.companyPhone)}</p>
  </div>`;
  const text = `${greet}\n\n${note || `Please find invoice ${inv.number} from ${s.companyName}.`}\n\nInvoice: ${inv.number}\nAmount due: ${total}\nDue: ${fmtDate(inv.dueDate)}\n\nView & download: ${url}\n\n${s.companyName} · ${s.companyEmail}`;

  try {
    const pdf = await invoicePdf(inv, s, origin);
    await sendMail({ to: inv.clientEmail, subject: `Invoice ${inv.number} from ${s.companyName} — ${total}`, html, text, attachments: [{ filename: `${inv.number}.pdf`, content: pdf }] });
  } catch (e) {
    console.error('emailInvoice failed', e);
    return { ok: false, error: 'Email could not be sent. Check the mailbox password in Vercel.' };
  }
  if (inv.status === 'draft') await setStatus(id, 'sent');
  revalidatePath('/admin');
  revalidatePath(`/admin/invoices/${id}`);
  return { ok: true };
}

// ── Settings ──────────────────────────────────────────────────────────────────
export async function updateSettings(s: Settings) {
  await requireAdmin();
  await saveSettings(s);
  revalidatePath('/admin', 'layout');
  return { ok: true };
}
