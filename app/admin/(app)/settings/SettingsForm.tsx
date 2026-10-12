'use client';

import { useState, useTransition } from 'react';
import type { Settings } from '@/lib/invoice-format';
import { updateSettings } from '../../actions';

const label: React.CSSProperties = { display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', marginBottom: '0.4rem' };

type Field = { key: keyof Settings; label: string; type?: 'text' | 'number' | 'area'; placeholder?: string };
const GROUPS: { title: string; hint?: string; fields: Field[] }[] = [
  { title: 'Company', fields: [
    { key: 'companyName', label: 'Trading name' },
    { key: 'companyLine', label: 'Registration line' },
    { key: 'companyAddress', label: 'Address', type: 'area' },
    { key: 'companyEmail', label: 'Email' },
    { key: 'companyPhone', label: 'Phone' },
  ] },
  { title: 'Bank details (₦ invoices)', hint: 'Clients pay by transfer to this account. The invoice number is shown as the reference.', fields: [
    { key: 'bankName', label: 'Bank', placeholder: 'e.g. Moniepoint MFB' },
    { key: 'accountName', label: 'Account name' },
    { key: 'accountNumber', label: 'Account number', placeholder: '10 digits' },
  ] },
  { title: '$ invoices', hint: 'Optional. If set, USD invoices show this instead of the naira account (e.g. a domiciliary account, Payoneer or USDC address).', fields: [
    { key: 'usdPaymentNote', label: 'USD payment instructions', type: 'area' },
  ] },
  { title: 'Defaults for new invoices', fields: [
    { key: 'defaultDueDays', label: 'Due in (days)', type: 'number' },
    { key: 'defaultTaxRate', label: 'VAT % (0 or 7.5)', type: 'number' },
    { key: 'defaultNotes', label: 'Notes', type: 'area' },
  ] },
];

export default function SettingsForm({ initial }: { initial: Settings }) {
  const [s, setS] = useState(initial);
  const [saved, setSaved] = useState(false);
  const [pending, start] = useTransition();

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); start(async () => { await updateSettings(s); setSaved(true); setTimeout(() => setSaved(false), 3000); }); }}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.1rem', alignItems: 'start' }}
    >
      {GROUPS.map((g) => (
        <section key={g.title} className="card" style={{ padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <div style={{ fontWeight: 700 }}>{g.title}</div>
            {g.hint && <p style={{ fontSize: '0.8rem', color: 'var(--ink-3)', marginTop: '0.25rem', lineHeight: 1.5 }}>{g.hint}</p>}
          </div>
          {g.fields.map((f) => (
            <div key={f.key}>
              <label style={label} htmlFor={f.key}>{f.label}</label>
              {f.type === 'area' ? (
                <textarea id={f.key} className="form-input" style={{ minHeight: '80px' }} value={String(s[f.key])} placeholder={f.placeholder} onChange={(e) => setS({ ...s, [f.key]: e.target.value })} />
              ) : (
                <input id={f.key} className="form-input" type={f.type ?? 'text'} step="any" value={String(s[f.key])} placeholder={f.placeholder}
                  onChange={(e) => setS({ ...s, [f.key]: f.type === 'number' ? Number(e.target.value) : e.target.value })} />
              )}
            </div>
          ))}
        </section>
      ))}
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn-primary" disabled={pending}>{pending ? 'Saving…' : 'Save settings'}</button>
        {saved && <span style={{ color: '#16a34a', fontSize: '0.875rem', fontWeight: 600 }}>Saved ✓</span>}
      </div>
    </form>
  );
}
