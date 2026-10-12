'use client';

import { useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import InvoiceDocument from '@/components/invoice/InvoiceDocument';
import StatusBadge from '@/components/invoice/StatusBadge';
import { totals, money, displayStatus, type Invoice, type InvoiceInput, type LineItem, type Settings, type Status } from '@/lib/invoice-format';
import { saveInvoice, changeStatus, emailInvoice, removeDraft, duplicateInvoice } from '../../../actions';

const label: React.CSSProperties = { display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', marginBottom: '0.4rem' };
const card: React.CSSProperties = { padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.9rem' };

function toInput(inv: Invoice): InvoiceInput {
  const { clientName, clientCompany, clientEmail, clientPhone, clientAddress, currency, issueDate, dueDate, items, discount, taxRate, notes } = inv;
  return { clientName, clientCompany, clientEmail, clientPhone, clientAddress, currency, issueDate, dueDate, items, discount, taxRate, notes };
}

export default function InvoiceEditor({ initial, settings }: { initial: Invoice; settings: Settings }) {
  const [form, setForm] = useState<InvoiceInput>(() => toInput(initial));
  const [dirty, setDirty] = useState(false);
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);
  const [emailNote, setEmailNote] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [pending, start] = useTransition();

  const preview: Invoice = { ...initial, ...form };
  const t = totals(preview);
  const st = displayStatus(initial);
  const publicUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/invoice/${initial.publicToken}`;

  // Warn before leaving with unsaved changes.
  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) e.preventDefault(); };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  const set = <K extends keyof InvoiceInput>(k: K, v: InvoiceInput[K]) => { setForm((f) => ({ ...f, [k]: v })); setDirty(true); };
  const setItem = (i: number, patch: Partial<LineItem>) => set('items', form.items.map((it, j) => (j === i ? { ...it, ...patch } : it)));

  const flash = (kind: 'ok' | 'err', text: string) => { setMsg({ kind, text }); setTimeout(() => setMsg(null), kind === 'err' ? 10000 : 4000); };

  const save = () => new Promise<void>((resolve) => start(async () => {
    await saveInvoice(initial.id, form);
    setDirty(false);
    resolve();
  }));

  const run = (fn: () => Promise<unknown>, ok?: string) => start(async () => {
    try {
      if (dirty) { await saveInvoice(initial.id, form); setDirty(false); }
      const r = (await fn()) as { ok?: boolean; error?: string } | undefined;
      if (r && r.ok === false) flash('err', r.error || 'Something went wrong.');
      else if (ok) flash('ok', ok);
    } catch (e) {
      // redirect() from a server action throws a special error Next handles itself.
      if (String((e as { digest?: string })?.digest ?? '').startsWith('NEXT_REDIRECT')) throw e;
      flash('err', 'Something went wrong.');
    }
  });

  const status = (s: Status, ok: string) => run(() => changeStatus(initial.id, s), ok);

  return (
    <div>
      {/* Top bar */}
      <div className="no-print" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Link href="/admin" style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>← Invoices</Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'ui-monospace, Menlo, monospace' }}>{initial.number}</h1>
        <StatusBadge status={st} />
        {dirty && <span style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>Unsaved changes</span>}
        <div style={{ marginLeft: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button className="btn-ghost" disabled={pending || !dirty} onClick={() => save().then(() => flash('ok', 'Saved'))} style={{ minHeight: '40px', opacity: dirty ? 1 : 0.55 }}>Save</button>
          <a className="btn-ghost" style={{ minHeight: '40px' }} href={`/admin/invoices/${initial.id}/pdf`}
            onClick={async (e) => { if (dirty) { e.preventDefault(); await save(); window.location.href = `/admin/invoices/${initial.id}/pdf`; } }}>Download PDF</a>
          {initial.status !== 'void' && <button className="btn-primary" disabled={pending} onClick={() => setShowEmail((v) => !v)} style={{ minHeight: '40px' }}>Email to client</button>}
        </div>
      </div>

      {msg && (
        <div role="status" style={{ marginBottom: '1rem', padding: '0.7rem 1rem', borderRadius: '12px', fontSize: '0.875rem', background: msg.kind === 'ok' ? '#e3f6ea' : '#fdecec', color: msg.kind === 'ok' ? '#166534' : '#b91c1c' }}>{msg.text}</div>
      )}

      {showEmail && (
        <div className="card no-print" style={{ ...card, marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.9rem' }}>
            Sends a branded email to <b>{form.clientEmail || 'the client (add an email first)'}</b> with a link to view and download this invoice. A copy goes to your inbox{initial.status === 'draft' ? ', and the invoice is marked as sent' : ''}.
          </div>
          <textarea className="form-input" style={{ minHeight: '90px' }} placeholder="Optional message (otherwise a standard note is used)" value={emailNote} onChange={(e) => setEmailNote(e.target.value)} />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-primary" disabled={pending} onClick={() => run(() => emailInvoice(initial.id, emailNote).then((r) => { if (r.ok) setShowEmail(false); return r; }), `Emailed to ${form.clientEmail}`)}>{pending ? 'Sending…' : 'Send email'}</button>
            <button className="btn-ghost" onClick={() => setShowEmail(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="g-2t" style={{ alignItems: 'start' }}>
        {/* ── Form ── */}
        <div className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', minWidth: 0 }}>
          <section className="card" style={card}>
            <div style={{ fontWeight: 700 }}>Client</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem' }}>
              <div><label style={label}>Contact name</label><input className="form-input" value={form.clientName} onChange={(e) => set('clientName', e.target.value)} placeholder="Ada Obi" /></div>
              <div><label style={label}>Company</label><input className="form-input" value={form.clientCompany} onChange={(e) => set('clientCompany', e.target.value)} placeholder="Acme Ltd" /></div>
              <div><label style={label}>Email</label><input className="form-input" type="email" value={form.clientEmail} onChange={(e) => set('clientEmail', e.target.value)} placeholder="ada@acme.com" /></div>
              <div><label style={label}>Phone</label><input className="form-input" value={form.clientPhone} onChange={(e) => set('clientPhone', e.target.value)} placeholder="+234…" /></div>
            </div>
            <div><label style={label}>Address</label><textarea className="form-input" style={{ minHeight: '70px' }} value={form.clientAddress} onChange={(e) => set('clientAddress', e.target.value)} placeholder="Street, city" /></div>
          </section>

          <section className="card" style={card}>
            <div style={{ fontWeight: 700 }}>Details</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.8rem' }}>
              <div><label style={label}>Currency</label>
                <select className="form-input" value={form.currency} onChange={(e) => set('currency', e.target.value as InvoiceInput['currency'])}>
                  <option value="NGN">₦ NGN</option><option value="USD">$ USD</option>
                </select></div>
              <div><label style={label}>Issue date</label><input className="form-input" type="date" value={form.issueDate} onChange={(e) => set('issueDate', e.target.value)} /></div>
              <div><label style={label}>Due date</label><input className="form-input" type="date" value={form.dueDate} onChange={(e) => set('dueDate', e.target.value)} /></div>
            </div>
          </section>

          <section className="card" style={card}>
            <div style={{ fontWeight: 700 }}>Line items</div>
            {form.items.map((it, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 70px 120px 32px', gap: '0.5rem', alignItems: 'start' }}>
                <textarea className="form-input" style={{ minHeight: '48px' }} rows={1} value={it.description} onChange={(e) => setItem(i, { description: e.target.value })} placeholder="e.g. Website design & development" aria-label="Description" />
                <input className="form-input" type="number" min="0" step="any" value={it.quantity} onChange={(e) => setItem(i, { quantity: Number(e.target.value) })} aria-label="Quantity" />
                <input className="form-input" type="number" min="0" step="0.01" value={it.unitPrice} onChange={(e) => setItem(i, { unitPrice: Number(e.target.value) })} aria-label="Unit price" />
                <button type="button" aria-label="Remove item" onClick={() => set('items', form.items.filter((_, j) => j !== i))} disabled={form.items.length === 1}
                  style={{ height: '48px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-3)', fontSize: '1.2rem', opacity: form.items.length === 1 ? 0.3 : 1 }}>×</button>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" className="btn-ghost" style={{ minHeight: '38px', fontSize: '0.85rem' }} onClick={() => set('items', [...form.items, { description: '', quantity: 1, unitPrice: 0 }])}>+ Add item</button>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-3)' }}>Qty · Unit price ({form.currency})</span>
            </div>
          </section>

          <section className="card" style={card}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.8rem' }}>
              <div><label style={label}>Discount ({form.currency})</label><input className="form-input" type="number" min="0" step="0.01" value={form.discount} onChange={(e) => set('discount', Number(e.target.value))} /></div>
              <div><label style={label}>VAT %</label>
                <select className="form-input" value={String(form.taxRate)} onChange={(e) => set('taxRate', Number(e.target.value))}>
                  <option value="0">No VAT</option><option value="7.5">7.5% (Nigeria VAT)</option>
                  {![0, 7.5].includes(form.taxRate) && <option value={String(form.taxRate)}>{form.taxRate}%</option>}
                </select></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.3rem', fontSize: '0.9rem', borderTop: '1px dashed var(--line-dash)', paddingTop: '0.8rem' }}>
              <span style={{ color: 'var(--ink-2)' }}>Subtotal</span><span>{money(t.subtotal, form.currency)}</span>
              {t.discount > 0 && <><span style={{ color: 'var(--ink-2)' }}>Discount</span><span>−{money(t.discount, form.currency)}</span></>}
              {t.tax > 0 && <><span style={{ color: 'var(--ink-2)' }}>VAT</span><span>{money(t.tax, form.currency)}</span></>}
              <b>Total</b><b>{money(t.total, form.currency)}</b>
            </div>
            <div><label style={label}>Notes (shown on invoice)</label><textarea className="form-input" style={{ minHeight: '80px' }} value={form.notes} onChange={(e) => set('notes', e.target.value)} /></div>
          </section>

          <section className="card" style={card}>
            <div style={{ fontWeight: 700 }}>Status & sharing</div>
            {initial.status !== 'draft' ? (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <input className="form-input" readOnly value={publicUrl} onFocus={(e) => e.target.select()} style={{ fontSize: '0.8rem' }} />
                <button className="btn-ghost" style={{ minHeight: '44px' }} onClick={() => navigator.clipboard.writeText(publicUrl).then(() => flash('ok', 'Client link copied'))}>Copy</button>
              </div>
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)' }}>The client link works once the invoice is marked as sent.</p>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {initial.status === 'draft' && <button className="btn-ghost" disabled={pending} onClick={() => status('sent', 'Marked as sent')}>Mark as sent</button>}
              {(initial.status === 'sent' || initial.status === 'draft') && <button className="btn-ghost" disabled={pending} onClick={() => status('paid', 'Marked as paid')} style={{ color: '#16a34a' }}>Mark as paid</button>}
              {initial.status === 'paid' && <button className="btn-ghost" disabled={pending} onClick={() => status('sent', 'Marked as unpaid')}>Mark as unpaid</button>}
              {initial.status !== 'draft' && initial.status !== 'void' && <Link className="btn-ghost" href={`/invoice/${initial.publicToken}`} target="_blank">Open client view ↗</Link>}
              <button className="btn-ghost" disabled={pending} onClick={() => run(() => duplicateInvoice(initial.id))}>Duplicate</button>
              {initial.status === 'void'
                ? <button className="btn-ghost" disabled={pending} onClick={() => status('draft', 'Restored as draft')}>Restore</button>
                : initial.status !== 'draft' && <button className="btn-ghost" disabled={pending} onClick={() => status('void', 'Invoice voided')} style={{ color: '#b91c1c' }}>Void</button>}
              {initial.status === 'draft' && <button className="btn-ghost" disabled={pending} onClick={() => { if (confirm(`Delete draft ${initial.number}?`)) run(() => removeDraft(initial.id)); }} style={{ color: '#b91c1c' }}>Delete draft</button>}
            </div>
          </section>
        </div>

        {/* ── Live preview ── */}
        <div style={{ position: 'sticky', top: '5rem', minWidth: 0 }}>
          <div className="no-print" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '0.6rem' }}>Live preview</div>
          <div style={{ zoom: 0.8 }}>
            <InvoiceDocument inv={preview} s={settings} />
          </div>
        </div>
      </div>
    </div>
  );
}
