// Commercial proposal — CLANDA GLOBAL LIMITED (12 Oct 2026).
// Render: npx tsx docs/proposals/clanda-global.tsx <out.pdf>
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { Document, Page, View, Text, Image, Font, StyleSheet, renderToFile, Svg, Defs, LinearGradient, Stop, Rect } from '@react-pdf/renderer';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
Font.register({ family: 'Inter', fonts: [
  { src: path.join(ROOT, 'public/fonts/Inter-Regular.ttf'), fontWeight: 400 },
  { src: path.join(ROOT, 'public/fonts/Inter-Bold.ttf'), fontWeight: 700 },
] });
Font.registerHyphenationCallback((w) => [w]);

// Site palette (app/globals.css)
const INK = '#141417', INK2 = '#5f5f68', INK3 = '#8d8d96', LINE = '#e4e2dc', SOFT = '#f4f3ef', DARK = '#0b0b0d', ACCENT = '#3a5cff', ACCENT2 = '#6d4bff', ACCENT_SOFT = '#eef1ff';
const LOGO_DARK = path.join(ROOT, 'public/logo-dark.png');   // dark mark, for light pages
const LOGO_LIGHT = path.join(ROOT, 'public/logo-black.png'); // white mark (filename is swapped), for dark cover

const P = {
  client: 'CLANDA GLOBAL LIMITED',
  attention: 'Uche Victor Clement',
  ref: 'NX-PRO-2026-001',
  date: '12 October 2026',
  title: 'Mobile bill payments & digital services platform',
};

const naira = (n: number) => `₦${n.toLocaleString('en-NG')}`;

const SCOPE: { group: string; items: [string, number][] }[] = [
  { group: 'Design & foundations', items: [
    ['UI/UX design and user journeys', 300_000],
    ['User authentication and account management', 200_000],
  ] },
  { group: 'Bill payments & digital services', items: [
    ['Data purchase integration', 180_000],
    ['Airtime top-up integration', 150_000],
    ['Cable TV subscriptions', 180_000],
    ['Electricity bill payments', 200_000],
    ['Exam PIN sales', 150_000],
    ['Betting account funding', 180_000],
    ['Social media boosting services', 180_000],
  ] },
  { group: 'Wallet & engagement', items: [
    ['Deposits and withdrawals', 300_000],
    ['Wallet, transaction history and receipts', 200_000],
    ['Referral and rewards system', 180_000],
    ['Push notifications', 120_000],
  ] },
  { group: 'Platform & operations', items: [
    ['Admin dashboard and user management', 250_000],
    ['Third-party API integration and backend', 250_000],
    ['Security testing and quality assurance', 150_000],
  ] },
  { group: 'Launch & support', items: [
    ['Google Play Store deployment', 100_000],
    ['Apple App Store / TestFlight deployment', 100_000],
    ['Two months post-launch technical support', 130_000],
  ] },
];
const TOTAL = SCOPE.flatMap((g) => g.items).reduce((a, [, v]) => a + v, 0);
if (TOTAL !== 3_500_000) throw new Error(`Scope total ${TOTAL} ≠ 3,500,000`);

const MILESTONES = [
  { n: '01', name: 'Commitment & design', pct: 20, text: 'Due at project commencement. Covers discovery, user flows and UI/UX design. Client reviews and approves the designs before development proceeds.' },
  { n: '02', name: 'Functional MVP', pct: 40, text: 'Due upon delivery of a testable MVP with the agreed functionality available for client review. In-scope issues identified during testing will be addressed.' },
  { n: '03', name: 'Store testing deployment', pct: 40, text: 'Due once the iOS build is available on TestFlight and the Android build is available on a Google Play testing track. Production submission follows final testing and approval.' },
];

const s = StyleSheet.create({
  page: { fontFamily: 'Inter', fontSize: 9.5, color: INK, paddingTop: 72, paddingBottom: 60, paddingHorizontal: 48 },
  header: { position: 'absolute', top: 26, left: 48, right: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerText: { fontSize: 7.5, color: INK3, letterSpacing: 0.4 },
  footer: { position: 'absolute', bottom: 26, left: 48, right: 48, flexDirection: 'row', justifyContent: 'space-between', fontSize: 7.5, color: INK3, borderTop: `1 solid ${LINE}`, paddingTop: 9 },
  eyebrow: { fontSize: 7, fontWeight: 700, letterSpacing: 1.6, color: ACCENT, textTransform: 'uppercase', marginBottom: 6 },
  h1: { fontSize: 22, fontWeight: 700, letterSpacing: -0.4, marginBottom: 10 },
  h2: { fontSize: 13, fontWeight: 700, marginBottom: 6, marginTop: 18 },
  body: { color: INK2 },
  label: { fontSize: 6.5, fontWeight: 700, letterSpacing: 1.2, color: INK3, textTransform: 'uppercase' },
  row: { flexDirection: 'row' },
});

const Para = ({ children, style }: { children: React.ReactNode; style?: object }) => <Text style={[s.body, { marginBottom: 7 }, style ?? {}]}>{children}</Text>;

function Chrome({ page }: { page: string }) {
  return (
    <>
      <View style={s.header} fixed>
        <Image src={LOGO_DARK} style={{ width: 42, height: 28, objectFit: 'contain', marginLeft: -4 }} />
        <Text style={s.headerText}>{P.ref} · {P.client}</Text>
      </View>
      <View style={s.footer} fixed>
        <Text>Nexxra Tech Innovations Limited · RC 9472371 · nexxradigitals.com</Text>
        <Text render={({ pageNumber, totalPages }) => `${page} · ${pageNumber} / ${totalPages}`} />
      </View>
    </>
  );
}

function GradientBar({ w, h }: { w: number; h: number }) {
  return (
    <Svg width={w} height={h}>
      <Defs><LinearGradient id="g" x1="0" y1="0" x2="1" y2="0"><Stop offset="0" stopColor={ACCENT} /><Stop offset="1" stopColor={ACCENT2} /></LinearGradient></Defs>
      <Rect x="0" y="0" width={w} height={h} fill="url(#g)" />
    </Svg>
  );
}

function Cover() {
  return (
    <Page size="A4" style={{ fontFamily: 'Inter', backgroundColor: DARK, color: '#fff', padding: 0 }}>
      <GradientBar w={595.28} h={6} />
      <View style={{ paddingHorizontal: 56, paddingTop: 50, flex: 1 }}>
        <Image src={LOGO_LIGHT} style={{ width: 84, height: 56, objectFit: 'contain', marginLeft: -8 }} />
        <View style={{ marginTop: 150 }}>
          <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, color: '#a9b6ff', marginBottom: 14 }}>COMMERCIAL PROPOSAL</Text>
          <Text style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.12, maxWidth: 440 }}>{P.title}</Text>
          <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.62)', marginTop: 16, maxWidth: 400 }}>
            A standalone iOS and Android app for everyday digital services, wallet funding and transaction tracking — designed, built, tested and launched by Nexxra Digital.
          </Text>
        </View>
        <View style={{ position: 'absolute', left: 56, right: 56, bottom: 56 }}>
          <View style={[s.row, { borderTop: '1 solid rgba(255,255,255,0.14)', paddingTop: 18 }]}>
            {[
              ['Prepared for', `${P.client}\nAttn: ${P.attention}`],
              ['Prepared by', 'Nexxra Digital\nNexxra Tech Innovations Limited'],
              ['Reference', `${P.ref}\n${P.date}`],
            ].map(([k, v]) => (
              <View key={k} style={{ flex: 1, paddingRight: 12 }}>
                <Text style={{ fontSize: 6.5, fontWeight: 700, letterSpacing: 1.4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 6 }}>{k}</Text>
                <Text style={{ fontSize: 9.5, color: '#fff' }}>{v}</Text>
              </View>
            ))}
          </View>
          <Text style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)', marginTop: 22 }}>hey@nexxradigitals.com · +234 811 026 8093 · nexxradigitals.com · Abuja, Nigeria</Text>
        </View>
      </View>
    </Page>
  );
}

function Overview() {
  const facts: [string, string][] = [
    ['Platforms', 'iOS & Android'],
    ['Investment', naira(TOTAL)],
    ['Payment', '3 milestones'],
    ['Support', '2 months post-launch'],
  ];
  return (
    <Page size="A4" style={s.page}>
      <Chrome page="Overview" />
      <Text style={s.eyebrow}>01 — Overview</Text>
      <Text style={s.h1}>Project summary</Text>
      <Para>Dear {P.attention},</Para>
      <Para>
        Thank you for considering Nexxra Digital for this project. We propose to design, build and prepare a standalone iOS and Android application that allows customers to purchase everyday digital services, fund their accounts and track transactions from one place.
      </Para>
      <Para>The scope below covers a working MVP, testing, store submission and two months of post-launch technical support.</Para>

      <View style={[s.row, { marginTop: 14, marginBottom: 6, border: `1 solid ${LINE}`, borderRadius: 10 }]}>
        {facts.map(([k, v], i) => (
          <View key={k} style={{ flex: 1, padding: 12, borderLeft: i ? `1 solid ${LINE}` : undefined }}>
            <Text style={[s.label, { marginBottom: 5 }]}>{k}</Text>
            <Text style={{ fontSize: 11, fontWeight: 700 }}>{v}</Text>
          </View>
        ))}
      </View>

      <Text style={s.h2}>What your customers will be able to do</Text>
      <View style={[s.row, { flexWrap: 'wrap', marginTop: 2 }]}>
        {['Buy data and airtime', 'Pay electricity bills', 'Renew cable TV', 'Buy exam PINs', 'Fund betting accounts', 'Order social media boosts', 'Deposit & withdraw', 'Track every transaction', 'Earn referral rewards'].map((t) => (
          <View key={t} style={{ width: '33.33%', flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: ACCENT, marginRight: 7 }} />
            <Text>{t}</Text>
          </View>
        ))}
      </View>

      <Text style={s.h2}>How we work</Text>
      {[
        ['Design first', 'You review and approve the user journeys and screens before any development starts.'],
        ['Visible progress', 'Each payment is tied to something you can see and test — designs, a working MVP, then store test builds.'],
        ['Launch & support', 'We handle App Store and Google Play submission and support the app for two months after it goes live.'],
      ].map(([k, v]) => (
        <View key={k} style={[s.row, { marginBottom: 7 }]}>
          <Text style={{ width: 110, fontWeight: 700 }}>{k}</Text>
          <Text style={[s.body, { flex: 1 }]}>{v}</Text>
        </View>
      ))}

      <View style={{ marginTop: 18, backgroundColor: SOFT, borderRadius: 10, padding: 14 }}>
        <Text style={[s.label, { marginBottom: 6 }]}>About Nexxra Digital</Text>
        <Text style={s.body}>
          Nexxra Digital (Nexxra Tech Innovations Limited, RC 9472371) is a CAC-registered software company in Abuja building websites, mobile apps and fintech products. Recent work includes Sawa Wallet, a phone-first non-custodial crypto wallet, and WayaTix, a WhatsApp-native event ticketing platform with integrated payments.
        </Text>
      </View>
    </Page>
  );
}

function Scope() {
  return (
    <Page size="A4" style={s.page}>
      <Chrome page="Scope & estimate" />
      <Text style={s.eyebrow}>02 — Scope</Text>
      <Text style={s.h1}>Scope & itemised estimate</Text>
      <Para>All amounts are in Nigerian naira (NGN).</Para>

      <View style={[s.row, { borderBottom: `1.5 solid ${INK}`, paddingBottom: 6, marginTop: 6 }]}>
        <Text style={[s.label, { flex: 1 }]}>Feature / deliverable</Text>
        <Text style={[s.label, { width: 100, textAlign: 'right' }]}>Amount</Text>
      </View>
      {SCOPE.map((g) => {
        const sub = g.items.reduce((a, [, v]) => a + v, 0);
        return (
          <View key={g.group} wrap={false}>
            <View style={[s.row, { marginTop: 10, marginBottom: 1, alignItems: 'center' }]}>
              <Text style={{ flex: 1, fontSize: 8, fontWeight: 700, color: ACCENT, letterSpacing: 0.4 }}>{g.group}</Text>
              <Text style={{ width: 100, textAlign: 'right', fontSize: 8, color: INK3 }}>{naira(sub)}</Text>
            </View>
            {g.items.map(([name, amt]) => (
              <View key={name} style={[s.row, { paddingVertical: 4.5, borderBottom: `1 solid ${LINE}` }]}>
                <Text style={{ flex: 1 }}>{name}</Text>
                <Text style={{ width: 100, textAlign: 'right', fontWeight: 700 }}>{naira(amt)}</Text>
              </View>
            ))}
          </View>
        );
      })}

      <View wrap={false} style={{ marginTop: 14, borderRadius: 10, overflow: 'hidden' }}>
        <View style={{ backgroundColor: DARK, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 7, fontWeight: 700, letterSpacing: 1.4, color: '#a9b6ff' }}>TOTAL PROJECT INVESTMENT</Text>
            <Text style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>Fixed estimate for the features listed above</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{naira(TOTAL)}</Text>
        </View>
        <GradientBar w={499.28} h={4} />
      </View>
    </Page>
  );
}

function Terms() {
  return (
    <Page size="A4" style={s.page}>
      <Chrome page="Delivery & terms" />
      <Text style={s.eyebrow}>03 — Delivery</Text>
      <Text style={s.h1}>Delivery & payment terms</Text>
      <Para>Payments are tied to visible progress and approval at each stage.</Para>

      {/* Milestone track */}
      <View style={[s.row, { marginTop: 8, marginBottom: 14, height: 8, borderRadius: 4, overflow: 'hidden' }]}>
        {MILESTONES.map((m, i) => (
          <View key={m.n} style={{ width: `${m.pct}%`, backgroundColor: [ACCENT, '#5650ff', ACCENT2][i], marginRight: i < 2 ? 2 : 0 }} />
        ))}
      </View>

      {MILESTONES.map((m) => (
        <View key={m.n} wrap={false} style={{ border: `1 solid ${LINE}`, borderRadius: 10, padding: 14, marginBottom: 10, flexDirection: 'row' }}>
          <Text style={{ width: 34, fontSize: 16, fontWeight: 700, color: ACCENT }}>{m.n}</Text>
          <View style={{ flex: 1 }}>
            <View style={[s.row, { justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }]}>
              <Text style={{ fontSize: 11, fontWeight: 700 }}>{m.name}</Text>
              <View style={[s.row, { alignItems: 'center' }]}>
                <Text style={{ fontSize: 8, fontWeight: 700, color: ACCENT, backgroundColor: ACCENT_SOFT, paddingVertical: 2, paddingHorizontal: 6, borderRadius: 8, marginRight: 10 }}>{m.pct}%</Text>
                <Text style={{ fontSize: 11, fontWeight: 700 }}>{naira((TOTAL * m.pct) / 100)}</Text>
              </View>
            </View>
            <Text style={s.body}>{m.text}</Text>
          </View>
        </View>
      ))}

      <Text style={s.h2}>Launch & included support</Text>
      <Para>Following final approval, we will support production release to the Apple App Store and Google Play Store. Two months of post-production technical support begin when the application goes live and include bug fixes, deployment-related issues and minor adjustments within the agreed scope. App-store review timelines and approvals remain subject to the respective platforms.</Para>

      <Text style={s.h2}>External services & dependencies</Text>
      <Para>The quoted amount covers software design, development and integration work. It excludes third-party API subscriptions, service-provider charges, payment processing fees, SMS/OTP costs, hosting, domain charges, Apple/Google developer account fees and applicable regulatory or compliance costs. The client will provide or fund required merchant/provider accounts, KYC documentation and approvals.</Para>
      <View style={{ backgroundColor: SOFT, borderLeft: `3 solid ${ACCENT}`, padding: 10, marginTop: 2 }}>
        <Text style={{ fontSize: 8.5, color: INK2 }}>Deposit/withdrawal, betting funding and other regulated transaction services are subject to provider onboarding, eligibility and applicable Nigerian requirements. Where a provider declines access or changes its API, a mutually agreed alternative or scope adjustment may be required. Store publication is subject to platform policy review.</Text>
      </View>

      <Text style={s.h2}>Commercial notes</Text>
      <Para>This is a fixed project estimate for the features listed above. Material additions or changes after design approval will be separately scoped and priced. Delivery dates will be confirmed following requirements sign-off and provider access. Payments will be invoiced at the stated milestones.</Para>
    </Page>
  );
}

function Acceptance() {
  const sig = (who: string, name: string) => (
    <View style={{ flex: 1, marginRight: 24 }}>
      <Text style={[s.label, { marginBottom: 8 }]}>{who}</Text>
      <Text style={{ fontWeight: 700, marginBottom: 30 }}>{name}</Text>
      {['Name', 'Signature', 'Date'].map((f) => (
        <View key={f} style={{ borderBottom: `1 solid ${INK3}`, marginBottom: 22, paddingBottom: 3 }}>
          <Text style={{ fontSize: 7.5, color: INK3 }}>{f}</Text>
        </View>
      ))}
    </View>
  );
  return (
    <Page size="A4" style={s.page}>
      <Chrome page="Acceptance" />
      <Text style={s.eyebrow}>04 — Next steps</Text>
      <Text style={s.h1}>Acceptance</Text>
      <Para>To proceed, sign below and return a copy to hey@nexxradigitals.com. We will then issue the first milestone invoice (Commitment & design, 20%) and schedule the discovery session.</Para>

      <View style={[s.row, { marginTop: 10, marginBottom: 6, backgroundColor: SOFT, borderRadius: 10, padding: 14 }]}>
        {[['Proposal', P.ref], ['Date', P.date], ['Total', naira(TOTAL)], ['First payment', naira(TOTAL * 0.2)]].map(([k, v]) => (
          <View key={k} style={{ flex: 1 }}>
            <Text style={[s.label, { marginBottom: 4 }]}>{k}</Text>
            <Text style={{ fontWeight: 700 }}>{v}</Text>
          </View>
        ))}
      </View>

      <View style={[s.row, { marginTop: 30 }]}>
        {sig('For the client', P.client)}
        {sig('For Nexxra Digital', 'Nexxra Tech Innovations Limited')}
      </View>

      <View style={{ marginTop: 'auto', backgroundColor: DARK, borderRadius: 12, padding: 18, color: '#fff' }}>
        <Text style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>Questions about this proposal?</Text>
        <Text style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)' }}>hey@nexxradigitals.com · +234 811 026 8093 · nexxradigitals.com</Text>
      </View>
    </Page>
  );
}

const out = process.argv[2] || 'proposal.pdf';
renderToFile(
  <Document title={`Proposal — ${P.title} — ${P.client}`} author="Nexxra Digital" subject={`Commercial proposal ${P.ref}`} creator="Nexxra Digital">
    <Cover />
    <Overview />
    <Scope />
    <Terms />
    <Acceptance />
  </Document>,
  out,
).then(() => console.log('wrote', out));
