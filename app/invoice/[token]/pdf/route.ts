import { getInvoiceByToken, getSettings } from '@/lib/invoices';
import { invoicePdf } from '@/lib/invoice-pdf';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, { params }: { params: Promise<{ token: string }> }) {
  const inv = await getInvoiceByToken((await params).token);
  if (!inv) return new Response('Not found', { status: 404 });
  const pdf = await invoicePdf(inv, await getSettings(), new URL(req.url).origin);
  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${inv.number}.pdf"`,
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex',
    },
  });
}
