import { totals, money, fmtDate, displayStatus, type Invoice, type Settings } from '@/lib/invoice-format';

const label: React.CSSProperties = { fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8d8d96', marginBottom: '0.4rem' };

/** The branded invoice itself — used by the admin preview and the client page. */
export default function InvoiceDocument({ inv, s }: { inv: Invoice; s: Settings }) {
  const t = totals(inv);
  const status = displayStatus(inv);
  const m = (n: number) => money(n, inv.currency);
  const hasBank = s.bankName || s.accountNumber;

  return (
    <article className="invoice-doc" style={{ background: '#fff', color: '#141417', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(17,17,20,.04), 0 12px 40px rgba(17,17,20,.08)', position: 'relative' }}>
      <div style={{ height: '6px', background: 'linear-gradient(90deg,#3a5cff,#6d4bff)' }} />

      {status === 'paid' && (
        <div aria-hidden="true" style={{ position: 'absolute', top: '120px', right: '-10px', transform: 'rotate(-12deg)', border: '3px solid #16a34a', color: '#16a34a', fontWeight: 800, letterSpacing: '0.2em', padding: '0.35rem 1.2rem', borderRadius: '8px', fontSize: '1.4rem', opacity: 0.8 }}>PAID</div>
      )}
      {status === 'void' && (
        <div aria-hidden="true" style={{ position: 'absolute', top: '120px', right: '-10px', transform: 'rotate(-12deg)', border: '3px solid #8d8d96', color: '#8d8d96', fontWeight: 800, letterSpacing: '0.2em', padding: '0.35rem 1.2rem', borderRadius: '8px', fontSize: '1.4rem' }}>VOID</div>
      )}

      <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
        {/* Header */}
        <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.png" alt="Nexxra Digital" style={{ height: '56px', width: 'auto', display: 'block', marginBottom: '0.75rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>{s.companyName}</div>
            <div style={{ fontSize: '0.75rem', color: '#5f5f68', lineHeight: 1.6, maxWidth: '22rem' }}>
              {s.companyLine}<br />{s.companyAddress}<br />{s.companyEmail} · {s.companyPhone}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>Invoice</div>
            <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '0.9rem', color: '#3a5cff', fontWeight: 700, marginTop: '0.5rem' }}>{inv.number}</div>
          </div>
        </header>

        {/* Parties + dates */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', padding: '1.25rem 0', borderTop: '1px dashed #d8d6cf', borderBottom: '1px dashed #d8d6cf', marginBottom: '2rem' }}>
          <div>
            <div style={label}>Billed to</div>
            <div style={{ fontWeight: 700 }}>{inv.clientCompany || inv.clientName || '—'}</div>
            <div style={{ fontSize: '0.85rem', color: '#5f5f68', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {inv.clientCompany && inv.clientName ? `${inv.clientName}\n` : ''}
              {inv.clientAddress ? `${inv.clientAddress}\n` : ''}
              {[inv.clientEmail, inv.clientPhone].filter(Boolean).join(' · ')}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '0.35rem 1.25rem', alignContent: 'start', justifyContent: 'end', fontSize: '0.85rem' }}>
            <span style={{ color: '#8d8d96' }}>Issue date</span><b style={{ textAlign: 'right' }}>{fmtDate(inv.issueDate)}</b>
            <span style={{ color: '#8d8d96' }}>Due date</span><b style={{ textAlign: 'right', color: status === 'overdue' ? '#dc2626' : undefined }}>{fmtDate(inv.dueDate)}</b>
            <span style={{ color: '#8d8d96' }}>Amount due</span><b style={{ textAlign: 'right' }}>{status === 'paid' ? m(0) : m(t.total)}</b>
          </div>
        </section>

        {/* Items */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ ...label, padding: '0 0 0.6rem' }}>Description</th>
              <th style={{ ...label, padding: '0 0 0.6rem', textAlign: 'right', width: '60px' }}>Qty</th>
              <th style={{ ...label, padding: '0 0 0.6rem', textAlign: 'right', width: '130px' }}>Rate</th>
              <th style={{ ...label, padding: '0 0 0.6rem', textAlign: 'right', width: '140px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {inv.items.map((it, i) => (
              <tr key={i} style={{ borderTop: '1px solid #ecebe6', verticalAlign: 'top' }}>
                <td style={{ padding: '0.85rem 0.75rem 0.85rem 0', whiteSpace: 'pre-line' }}>{it.description || '—'}</td>
                <td style={{ padding: '0.85rem 0', textAlign: 'right' }}>{it.quantity}</td>
                <td style={{ padding: '0.85rem 0', textAlign: 'right' }}>{m(it.unitPrice)}</td>
                <td style={{ padding: '0.85rem 0', textAlign: 'right', fontWeight: 600 }}>{m(t.lines[i])}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <section style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', borderTop: '1px solid #ecebe6', paddingTop: '1rem' }}>
          <div style={{ width: 'min(100%, 300px)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.45rem', fontSize: '0.9rem' }}>
            <span style={{ color: '#5f5f68' }}>Subtotal</span><span style={{ textAlign: 'right' }}>{m(t.subtotal)}</span>
            {t.discount > 0 && <><span style={{ color: '#5f5f68' }}>Discount</span><span style={{ textAlign: 'right' }}>−{m(t.discount)}</span></>}
            {inv.taxRate > 0 && <><span style={{ color: '#5f5f68' }}>VAT ({inv.taxRate}%)</span><span style={{ textAlign: 'right' }}>{m(t.tax)}</span></>}
            <span style={{ fontWeight: 800, fontSize: '1.05rem', borderTop: '2px solid #141417', paddingTop: '0.6rem', marginTop: '0.3rem' }}>Total</span>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', borderTop: '2px solid #141417', paddingTop: '0.6rem', marginTop: '0.3rem', textAlign: 'right' }}>{m(t.total)}</span>
          </div>
        </section>

        {/* Payment + notes */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
          <div style={{ background: '#f4f5ff', border: '1px solid #dfe4ff', borderRadius: '14px', padding: '1.1rem 1.25rem' }}>
            <div style={{ ...label, color: '#3a5cff' }}>How to pay</div>
            {inv.currency === 'NGN' || !s.usdPaymentNote ? (
              hasBank ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.3rem 1rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#5f5f68' }}>Bank</span><b>{s.bankName}</b>
                  <span style={{ color: '#5f5f68' }}>Account name</span><b>{s.accountName}</b>
                  <span style={{ color: '#5f5f68' }}>Account no.</span><b style={{ fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.04em' }}>{s.accountNumber}</b>
                  <span style={{ color: '#5f5f68' }}>Reference</span><b>{inv.number}</b>
                </div>
              ) : <div style={{ fontSize: '0.85rem', color: '#5f5f68' }}>Contact {s.companyEmail} for payment details.</div>
            ) : (
              <div style={{ fontSize: '0.85rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{s.usdPaymentNote}{`\nReference: ${inv.number}`}</div>
            )}
          </div>
          {inv.notes && (
            <div style={{ fontSize: '0.85rem', color: '#5f5f68', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              <div style={label}>Notes</div>{inv.notes}
            </div>
          )}
        </section>

        <footer style={{ marginTop: '2.5rem', paddingTop: '1rem', borderTop: '1px dashed #d8d6cf', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.75rem', color: '#8d8d96' }}>
          <span>{s.companyName} · nexxradigitals.com</span>
          <span>Questions? {s.companyEmail}</span>
        </footer>
      </div>
    </article>
  );
}
