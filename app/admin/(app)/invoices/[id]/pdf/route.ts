import { isAdmin } from '@/lib/admin-auth';
import { getInvoice, getSettings } from '@/lib/invoices';
import { invoicePdf } from '@/lib/invoice-pdf';

export const dynamic = 'force-dynamic';

// Admin download — works for drafts too, unlike the public client link.
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return new Response('Unauthorized', { status: 401 });
  const inv = await getInvoice((await params).id);
  if (!inv) return new Response('Not found', { status: 404 });
  const pdf = await invoicePdf(inv, await getSettings(), new URL(req.url).origin);
  return new Response(new Uint8Array(pdf), {
    headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${inv.number}.pdf"`, 'Cache-Control': 'private, no-store' },
  });
}
