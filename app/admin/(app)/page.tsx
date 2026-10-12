import type { Metadata } from 'next';
import Link from 'next/link';
import StatusBadge from '@/components/invoice/StatusBadge';
import { listInvoices, totals, money, fmtDate, displayStatus, type Currency } from '@/lib/invoices';
import { newInvoice } from '../actions';

export const metadata: Metadata = { title: 'Invoices' };

const FILTERS = ['all', 'draft', 'sent', 'overdue', 'paid', 'void'] as const;

type Props = { searchParams: Promise<{ status?: string; q?: string }> };

export default async function InvoicesPage({ searchParams }: Props) {
  const { status = 'all', q = '' } = await searchParams;
  const all = (await listInvoices()).map((inv) => ({ inv, st: displayStatus(inv), total: totals(inv).total }));

  // Totals per currency, so naira and dollars never get added together.
  const sum = (pred: (x: (typeof all)[number]) => boolean) => {
    const out: Partial<Record<Currency, number>> = {};
    for (const x of all) if (pred(x)) out[x.inv.currency] = (out[x.inv.currency] || 0) + x.total;
    return Object.entries(out).map(([c, v]) => money(v!, c as Currency)).join(' + ') || money(0, 'NGN');
  };
  const month = new Date().toISOString().slice(0, 7);
  const stats = [
    { label: 'Outstanding', value: sum((x) => x.st === 'sent' || x.st === 'overdue'), tone: 'var(--ink)' },
    { label: 'Overdue', value: sum((x) => x.st === 'overdue'), tone: '#dc2626' },
    { label: 'Paid this month', value: sum((x) => x.st === 'paid' && (x.inv.paidAt || '').startsWith(month)), tone: '#16a34a' },
    { label: 'Drafts', value: String(all.filter((x) => x.st === 'draft').length), tone: 'var(--ink-2)' },
  ];

  const needle = q.trim().toLowerCase();
  const rows = all.filter((x) =>
    (status === 'all' || x.st === status) &&
    (!needle || [x.inv.number, x.inv.clientName, x.inv.clientCompany, x.inv.clientEmail].some((f) => f.toLowerCase().includes(needle))),
  );

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1 }}>Invoices</h1>
          <p style={{ color: 'var(--ink-3)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{all.length} total</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.9rem', marginBottom: '1.75rem' }}>
        {stats.map((s) => (
          <div key={s.label} className="card" style={{ padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '0.4rem' }}>{s.label}</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: s.tone, lineHeight: 1.2 }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {FILTERS.map((f) => (
            <Link key={f} href={`/admin?status=${f}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
              style={{ padding: '0.4rem 0.85rem', borderRadius: '999px', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'capitalize',
                background: status === f ? 'var(--dark)' : 'var(--surface)', color: status === f ? '#fff' : 'var(--ink-2)', border: '1px solid var(--line)' }}>
              {f}
            </Link>
          ))}
        </div>
        <form>
          <input type="hidden" name="status" value={status} />
          <input name="q" defaultValue={q} placeholder="Search client or number…" className="form-input" style={{ minHeight: '40px', width: 'min(100%, 280px)', background: 'var(--surface)' }} />
        </form>
      </div>

      {rows.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
          <p style={{ color: 'var(--ink-2)', marginBottom: '1.25rem' }}>{all.length ? 'No invoices match.' : 'No invoices yet.'}</p>
          <form action={newInvoice}><button className="btn-primary">Create your first invoice</button></form>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--ink-3)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {['Number', 'Client', 'Issued', 'Due', 'Amount', 'Status'].map((h, i) => (
                  <th key={h} style={{ padding: '0.9rem 1.1rem', fontWeight: 700, textAlign: i === 4 ? 'right' : 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ inv, st, total }) => (
                <tr key={inv.id} style={{ borderTop: '1px solid var(--line)' }}>
                  <td style={{ padding: '0.85rem 1.1rem' }}>
                    <Link href={`/admin/invoices/${inv.id}`} style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontWeight: 700, color: 'var(--accent)' }}>{inv.number}</Link>
                  </td>
                  <td style={{ padding: '0.85rem 1.1rem' }}>
                    <div style={{ fontWeight: 600 }}>{inv.clientCompany || inv.clientName || <span style={{ color: 'var(--ink-3)' }}>No client yet</span>}</div>
                    {inv.clientCompany && inv.clientName && <div style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>{inv.clientName}</div>}
                  </td>
                  <td style={{ padding: '0.85rem 1.1rem', color: 'var(--ink-2)' }}>{fmtDate(inv.issueDate)}</td>
                  <td style={{ padding: '0.85rem 1.1rem', color: st === 'overdue' ? '#dc2626' : 'var(--ink-2)' }}>{fmtDate(inv.dueDate)}</td>
                  <td style={{ padding: '0.85rem 1.1rem', textAlign: 'right', fontWeight: 700 }}>{money(total, inv.currency)}</td>
                  <td style={{ padding: '0.85rem 1.1rem' }}><StatusBadge status={st} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
