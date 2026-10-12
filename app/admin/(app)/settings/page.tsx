import type { Metadata } from 'next';
import { getSettings } from '@/lib/invoices';
import SettingsForm from './SettingsForm';

export const metadata: Metadata = { title: 'Settings' };

export default async function SettingsPage() {
  return (
    <>
      <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.25rem' }}>Settings</h1>
      <p style={{ color: 'var(--ink-3)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Shown on every invoice. Changes apply to existing invoices too.</p>
      <SettingsForm initial={await getSettings()} />
    </>
  );
}
