import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInvoice, getSettings } from '@/lib/invoices';
import InvoiceEditor from './InvoiceEditor';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const inv = await getInvoice((await params).id);
  return { title: inv?.number ?? 'Invoice' };
}

export default async function InvoicePage({ params }: Props) {
  const inv = await getInvoice((await params).id);
  if (!inv) notFound();
  return <InvoiceEditor key={inv.id + inv.status} initial={inv} settings={await getSettings()} />;
}
