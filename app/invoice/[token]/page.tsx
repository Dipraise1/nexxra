import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InvoiceDocument from '@/components/invoice/InvoiceDocument';
import PrintButton from '@/components/invoice/PrintButton';
import { getInvoiceByToken, getSettings, totals, money, displayStatus } from '@/lib/invoices';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ token: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const inv = await getInvoiceByToken((await params).token);
  return {
    title: inv ? `Invoice ${inv.number}` : 'Invoice',
    robots: { index: false, follow: false },
  };
}

export default async function PublicInvoicePage({ params }: Props) {
  const inv = await getInvoiceByToken((await params).token);
  if (!inv) notFound();
  const s = await getSettings();
  const status = displayStatus(inv);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: 'clamp(1rem, 4vw, 3rem) 1rem' }}>
      <div className="invoice-wrap" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div className="no-print" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--ink-2)' }}>
            {status === 'paid' ? 'Paid — thank you!' : status === 'void' ? 'This invoice has been cancelled.' : <>Amount due <b style={{ color: 'var(--ink)' }}>{money(totals(inv).total, inv.currency)}</b></>}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <PrintButton className="btn-ghost" label="Print" />
            <a href={`/invoice/${inv.publicToken}/pdf`} className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download PDF
            </a>
          </div>
        </div>
        <InvoiceDocument inv={inv} s={s} />
      </div>
    </main>
  );
}
