const STYLES: Record<string, { bg: string; fg: string; label: string }> = {
  draft: { bg: '#ecebe6', fg: '#5f5f68', label: 'Draft' },
  sent: { bg: '#e6ebff', fg: '#3a5cff', label: 'Sent' },
  overdue: { bg: '#fdecec', fg: '#dc2626', label: 'Overdue' },
  paid: { bg: '#e3f6ea', fg: '#16a34a', label: 'Paid' },
  void: { bg: '#f1f0ec', fg: '#8d8d96', label: 'Void' },
};

export default function StatusBadge({ status }: { status: string }) {
  const s = STYLES[status] ?? STYLES.draft;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: s.bg, color: s.fg, borderRadius: '999px', padding: '0.2rem 0.6rem', fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.fg }} />{s.label}
    </span>
  );
}
