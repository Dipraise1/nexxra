import { randomBytes } from 'crypto';
import { query, tx } from './db';

export * from './invoice-format';
import { DEFAULT_SETTINGS, type Currency, type Invoice, type InvoiceInput, type LineItem, type Settings, type Status } from './invoice-format';

// ── Rows ──────────────────────────────────────────────────────────────────────
type Row = Record<string, unknown>;
const iso = (d: unknown) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? '').slice(0, 10));
const ts = (d: unknown) => (d instanceof Date ? d.toISOString() : d ? String(d) : null);

function fromRow(r: Row): Invoice {
  return {
    id: String(r.id), number: String(r.number), status: r.status as Status, publicToken: String(r.public_token),
    clientName: String(r.client_name), clientCompany: String(r.client_company), clientEmail: String(r.client_email),
    clientPhone: String(r.client_phone), clientAddress: String(r.client_address),
    currency: r.currency as Currency, issueDate: iso(r.issue_date), dueDate: iso(r.due_date),
    items: (r.items as LineItem[]) || [], discount: Number(r.discount), taxRate: Number(r.tax_rate), notes: String(r.notes),
    sentAt: ts(r.sent_at), paidAt: ts(r.paid_at), createdAt: ts(r.created_at) || '',
  };
}

// ── Queries ───────────────────────────────────────────────────────────────────
export async function listInvoices() {
  return (await query('select * from invoices order by created_at desc limit 500')).map(fromRow);
}

export async function getInvoice(id: string) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const [r] = await query('select * from invoices where id = $1', [id]);
  return r ? fromRow(r) : null;
}

export async function getInvoiceByToken(token: string) {
  if (!/^[A-Za-z0-9_-]{20,64}$/.test(token)) return null;
  const [r] = await query("select * from invoices where public_token = $1 and status <> 'draft'", [token]);
  return r ? fromRow(r) : null;
}

/** New draft with the next number for this year, e.g. NX-2026-0007. */
export async function createDraft(seed?: Partial<InvoiceInput>) {
  const s = await getSettings();
  const year = new Date().getFullYear();
  return tx(async (c) => {
    const { rows: [{ n }] } = await c.query<{ n: number }>(
      'insert into counters (key, n) values ($1, 1) on conflict (key) do update set n = counters.n + 1 returning n',
      [`invoice:${year}`],
    );
    const number = `NX-${year}-${String(n).padStart(4, '0')}`;
    const { rows: [r] } = await c.query(
      `insert into invoices (number, public_token, due_date, tax_rate, notes, items, client_name, client_company, client_email, client_phone, client_address, currency)
       values ($1, $2, current_date + $3::int, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *`,
      [number, randomBytes(18).toString('base64url'), s.defaultDueDays, s.defaultTaxRate, s.defaultNotes,
       JSON.stringify(seed?.items ?? [{ description: '', quantity: 1, unitPrice: 0 }]),
       seed?.clientName ?? '', seed?.clientCompany ?? '', seed?.clientEmail ?? '', seed?.clientPhone ?? '', seed?.clientAddress ?? '', seed?.currency ?? 'NGN'],
    );
    return fromRow(r);
  });
}

const clip = (v: unknown, max: number) => String(v ?? '').slice(0, max);

export function sanitize(input: InvoiceInput): InvoiceInput {
  const date = (d: string) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? d : new Date().toISOString().slice(0, 10));
  return {
    clientName: clip(input.clientName, 120), clientCompany: clip(input.clientCompany, 160), clientEmail: clip(input.clientEmail, 160).trim(),
    clientPhone: clip(input.clientPhone, 40), clientAddress: clip(input.clientAddress, 400),
    currency: input.currency === 'USD' ? 'USD' : 'NGN',
    issueDate: date(input.issueDate), dueDate: date(input.dueDate),
    items: (input.items || []).slice(0, 50).map((it) => ({
      description: clip(it.description, 500),
      quantity: Math.max(0, Math.min(1e6, Number(it.quantity) || 0)),
      unitPrice: Math.max(0, Math.min(1e11, Math.round((Number(it.unitPrice) || 0) * 100) / 100)),
    })),
    discount: Math.max(0, Math.round((Number(input.discount) || 0) * 100) / 100),
    taxRate: Math.max(0, Math.min(100, Number(input.taxRate) || 0)),
    notes: clip(input.notes, 2000),
  };
}

export async function updateInvoice(id: string, input: InvoiceInput) {
  const v = sanitize(input);
  await query(
    `update invoices set client_name=$2, client_company=$3, client_email=$4, client_phone=$5, client_address=$6, currency=$7,
       issue_date=$8, due_date=$9, items=$10, discount=$11, tax_rate=$12, notes=$13, updated_at=now() where id=$1`,
    [id, v.clientName, v.clientCompany, v.clientEmail, v.clientPhone, v.clientAddress, v.currency,
     v.issueDate, v.dueDate, JSON.stringify(v.items), v.discount, v.taxRate, v.notes],
  );
}

export async function setStatus(id: string, status: Status) {
  await query(
    `update invoices set status=$2,
       sent_at = case when $2 in ('sent','paid') then coalesce(sent_at, now()) else sent_at end,
       paid_at = case when $2 = 'paid' then coalesce(paid_at, now()) when $2 <> 'paid' then null else paid_at end,
       updated_at=now() where id=$1`,
    [id, status],
  );
}

export async function deleteDraft(id: string) {
  await query("delete from invoices where id=$1 and status='draft'", [id]);
}

// ── Settings ──────────────────────────────────────────────────────────────────
export async function getSettings(): Promise<Settings> {
  const [r] = await query<{ value: Partial<Settings> }>("select value from settings where key='company'");
  return { ...DEFAULT_SETTINGS, ...(r?.value ?? {}) };
}

export async function saveSettings(s: Settings) {
  const v: Settings = {
    ...DEFAULT_SETTINGS,
    ...Object.fromEntries(Object.entries(s).map(([k, val]) => [k, typeof val === 'string' ? val.slice(0, 600) : val])),
    defaultTaxRate: Math.max(0, Math.min(100, Number(s.defaultTaxRate) || 0)),
    defaultDueDays: Math.max(0, Math.min(365, Math.round(Number(s.defaultDueDays) || 0))),
  };
  await query("insert into settings (key, value) values ('company', $1) on conflict (key) do update set value = excluded.value", [JSON.stringify(v)]);
}
