// Invoice types, maths and formatting — pure, safe to import in client components.

export type Currency = 'NGN' | 'USD';
export type Status = 'draft' | 'sent' | 'paid' | 'void';
export type LineItem = { description: string; quantity: number; unitPrice: number };

export type Invoice = {
  id: string;
  number: string;
  status: Status;
  publicToken: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  currency: Currency;
  issueDate: string; // YYYY-MM-DD
  dueDate: string;
  items: LineItem[];
  discount: number;
  taxRate: number;
  notes: string;
  sentAt: string | null;
  paidAt: string | null;
  createdAt: string;
};

export type InvoiceInput = Omit<Invoice, 'id' | 'number' | 'status' | 'publicToken' | 'sentAt' | 'paidAt' | 'createdAt'>;

export type Settings = {
  companyName: string;
  companyLine: string;   // registration line under the name
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  usdPaymentNote: string;
  defaultNotes: string;
  defaultTaxRate: number;
  defaultDueDays: number;
};

export const DEFAULT_SETTINGS: Settings = {
  companyName: 'Nexxra Digital',
  companyLine: 'Nexxra Tech Innovations Limited · RC 9472371 · TIN 2623718314591',
  companyAddress: 'Abuja, Federal Capital Territory, Nigeria',
  companyEmail: 'hey@nexxradigitals.com',
  companyPhone: '+234 811 026 8093',
  bankName: '',
  accountName: 'Nexxra Tech Innovations Limited',
  accountNumber: '',
  usdPaymentNote: '',
  defaultNotes: 'Thank you for your business. Please include the invoice number as your payment reference.',
  defaultTaxRate: 0,
  defaultDueDays: 14,
};

// ── Money ─────────────────────────────────────────────────────────────────────
// Everything is computed in minor units (kobo / cents) to avoid float drift.
const minor = (n: number) => Math.round((Number(n) || 0) * 100);

export function totals(inv: Pick<Invoice, 'items' | 'discount' | 'taxRate'>) {
  const lines = inv.items.map((it) => Math.round((Number(it.quantity) || 0) * minor(it.unitPrice)));
  const subtotal = lines.reduce((a, b) => a + b, 0);
  const discount = Math.min(minor(inv.discount), subtotal);
  const taxable = subtotal - discount;
  const tax = Math.round((taxable * (Number(inv.taxRate) || 0)) / 100);
  return { lines: lines.map((l) => l / 100), subtotal: subtotal / 100, discount: discount / 100, tax: tax / 100, total: (taxable + tax) / 100 };
}

export function money(amount: number, currency: Currency) {
  return new Intl.NumberFormat(currency === 'NGN' ? 'en-NG' : 'en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(amount);
}

export function displayStatus(inv: Pick<Invoice, 'status' | 'dueDate'>): Status | 'overdue' {
  const today = new Date().toISOString().slice(0, 10);
  return inv.status === 'sent' && inv.dueDate < today ? 'overdue' : inv.status;
}

export const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
