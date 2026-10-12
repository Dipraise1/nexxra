import { Document, Page, View, Text, Image, Font, StyleSheet, renderToBuffer } from '@react-pdf/renderer';
import { totals, money, fmtDate, displayStatus, type Invoice, type Settings } from './invoice-format';

// Inter (latin + latin-ext merged) — DM Sans has no ₦ glyph.
let registered = '';
function fonts(origin: string) {
  if (registered === origin) return;
  Font.register({ family: 'Inter', fonts: [
    { src: `${origin}/fonts/Inter-Regular.ttf`, fontWeight: 400 },
    { src: `${origin}/fonts/Inter-Bold.ttf`, fontWeight: 700 },
  ] });
  Font.registerHyphenationCallback((w) => [w]);
  registered = origin;
}

const INK = '#141417', INK2 = '#5f5f68', INK3 = '#8d8d96', LINE = '#ecebe6', ACCENT = '#3a5cff';

const s = StyleSheet.create({
  page: { fontFamily: 'Inter', fontSize: 9.5, color: INK, paddingBottom: 48 },
  bar: { height: 5, backgroundColor: ACCENT },
  body: { paddingHorizontal: 40, paddingTop: 30 },
  row: { flexDirection: 'row' },
  label: { fontSize: 6.5, fontWeight: 700, letterSpacing: 1, color: INK3, marginBottom: 4, textTransform: 'uppercase' },
  muted: { color: INK2 },
  th: { fontSize: 6.5, fontWeight: 700, letterSpacing: 1, color: INK3, textTransform: 'uppercase', paddingBottom: 6 },
  td: { paddingVertical: 8 },
  footer: { position: 'absolute', bottom: 24, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between', fontSize: 7.5, color: INK3, borderTop: `1 dashed #d8d6cf`, paddingTop: 8 },
});

function InvoicePdf({ inv, st, origin }: { inv: Invoice; st: Settings; origin: string }) {
  const t = totals(inv);
  const status = displayStatus(inv);
  const m = (n: number) => money(n, inv.currency);
  const showUsd = inv.currency === 'USD' && !!st.usdPaymentNote;
  const kv = (k: string, v: string, bold = false) => (
    <View style={[s.row, { justifyContent: 'space-between', marginBottom: 3 }]}>
      <Text style={{ color: INK2, marginRight: 16 }}>{k}</Text><Text style={{ fontWeight: bold ? 700 : 400 }}>{v}</Text>
    </View>
  );

  return (
    <Document title={`Invoice ${inv.number}`} author={st.companyName} creator="Nexxra Digital">
      <Page size="A4" style={s.page}>
        <View style={s.bar} fixed />
        <View style={s.body}>
          {/* Header */}
          <View style={[s.row, { justifyContent: 'space-between', marginBottom: 26 }]}>
            <View style={{ maxWidth: 280 }}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image src={`${origin}/logo-dark.png`} style={{ width: 66, height: 44, objectFit: 'contain', marginBottom: 8, marginLeft: -6 }} />
              <Text style={{ fontWeight: 700, fontSize: 11, marginBottom: 3 }}>{st.companyName}</Text>
              <Text style={[s.muted, { fontSize: 8 }]}>{st.companyLine}</Text>
              <Text style={[s.muted, { fontSize: 8 }]}>{st.companyAddress}</Text>
              <Text style={[s.muted, { fontSize: 8 }]}>{st.companyEmail} · {st.companyPhone}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>Invoice</Text>
              <Text style={{ fontSize: 10, fontWeight: 700, color: ACCENT, marginTop: 4 }}>{inv.number}</Text>
              {status === 'paid' && <Text style={{ marginTop: 10, color: '#16a34a', fontWeight: 700, fontSize: 12, letterSpacing: 2, border: '2 solid #16a34a', paddingVertical: 3, paddingHorizontal: 10, borderRadius: 4 }}>PAID</Text>}
              {status === 'void' && <Text style={{ marginTop: 10, color: INK3, fontWeight: 700, fontSize: 12, letterSpacing: 2, border: `2 solid ${INK3}`, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 4 }}>VOID</Text>}
            </View>
          </View>

          {/* Parties */}
          <View style={[s.row, { justifyContent: 'space-between', paddingVertical: 14, borderTop: '1 dashed #d8d6cf', borderBottom: '1 dashed #d8d6cf', marginBottom: 20 }]}>
            <View style={{ width: 290 }}>
              <Text style={s.label}>Billed to</Text>
              <Text style={{ fontWeight: 700, fontSize: 10.5, marginBottom: 2 }}>{inv.clientCompany || inv.clientName || '—'}</Text>
              {inv.clientCompany && inv.clientName ? <Text style={s.muted}>{inv.clientName}</Text> : null}
              {inv.clientAddress ? <Text style={s.muted}>{inv.clientAddress}</Text> : null}
              {inv.clientEmail || inv.clientPhone ? <Text style={s.muted}>{[inv.clientEmail, inv.clientPhone].filter(Boolean).join(' · ')}</Text> : null}
            </View>
            <View style={{ width: 190 }}>
              {kv('Issue date', fmtDate(inv.issueDate), true)}
              {kv('Due date', fmtDate(inv.dueDate), true)}
              {kv('Amount due', status === 'paid' ? m(0) : m(t.total), true)}
            </View>
          </View>

          {/* Items */}
          <View style={[s.row, { borderBottom: `1 solid ${LINE}` }]}>
            <Text style={[s.th, { flex: 1 }]}>Description</Text>
            <Text style={[s.th, { width: 40, textAlign: 'right' }]}>Qty</Text>
            <Text style={[s.th, { width: 95, textAlign: 'right' }]}>Rate</Text>
            <Text style={[s.th, { width: 105, textAlign: 'right' }]}>Amount</Text>
          </View>
          {inv.items.map((it, i) => (
            <View key={i} style={[s.row, { borderBottom: `1 solid ${LINE}` }]} wrap={false}>
              <Text style={[s.td, { flex: 1, paddingRight: 10 }]}>{it.description || '—'}</Text>
              <Text style={[s.td, { width: 40, textAlign: 'right' }]}>{String(it.quantity)}</Text>
              <Text style={[s.td, { width: 95, textAlign: 'right' }]}>{m(it.unitPrice)}</Text>
              <Text style={[s.td, { width: 105, textAlign: 'right', fontWeight: 700 }]}>{m(t.lines[i])}</Text>
            </View>
          ))}

          {/* Totals */}
          <View style={{ alignSelf: 'flex-end', width: 220, marginTop: 12 }} wrap={false}>
            {kv('Subtotal', m(t.subtotal))}
            {t.discount > 0 && kv('Discount', `−${m(t.discount)}`)}
            {inv.taxRate > 0 && kv(`VAT (${inv.taxRate}%)`, m(t.tax))}
            <View style={[s.row, { justifyContent: 'space-between', borderTop: `2 solid ${INK}`, paddingTop: 6, marginTop: 4 }]}>
              <Text style={{ fontWeight: 700, fontSize: 11.5 }}>Total</Text>
              <Text style={{ fontWeight: 700, fontSize: 11.5 }}>{m(t.total)}</Text>
            </View>
          </View>

          {/* Payment + notes */}
          <View style={[s.row, { marginTop: 26, justifyContent: 'space-between' }]} wrap={false}>
            <View style={{ width: 250, backgroundColor: '#f4f5ff', border: '1 solid #dfe4ff', borderRadius: 8, padding: 12 }}>
              <Text style={[s.label, { color: ACCENT }]}>How to pay</Text>
              {showUsd ? (
                <><Text style={{ lineHeight: 1.3 }}>{st.usdPaymentNote}</Text><Text style={{ marginTop: 4 }}>Reference: <Text style={{ fontWeight: 700 }}>{inv.number}</Text></Text></>
              ) : st.bankName || st.accountNumber ? (
                <>{kv('Bank', st.bankName, true)}{kv('Account name', st.accountName, true)}{kv('Account no.', st.accountNumber, true)}{kv('Reference', inv.number, true)}</>
              ) : (
                <Text style={s.muted}>Contact {st.companyEmail} for payment details.</Text>
              )}
            </View>
            {inv.notes ? (
              <View style={{ width: 245 }}>
                <Text style={s.label}>Notes</Text>
                <Text style={s.muted}>{inv.notes}</Text>
              </View>
            ) : null}
          </View>
        </View>

        <View style={s.footer} fixed>
          <Text>{st.companyName} · nexxradigitals.com</Text>
          <Text render={({ pageNumber, totalPages }) => (totalPages > 1 ? `Page ${pageNumber} of ${totalPages}` : `Questions? ${st.companyEmail}`)} />
        </View>
      </Page>
    </Document>
  );
}

/** Render an invoice to a PDF buffer. `origin` is used to fetch the logo and fonts. */
export async function invoicePdf(inv: Invoice, st: Settings, origin: string) {
  fonts(origin);
  return renderToBuffer(<InvoicePdf inv={inv} st={st} origin={origin} />);
}
