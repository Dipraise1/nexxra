import { Pool, types, type PoolClient } from 'pg';

// Return DATE columns as 'YYYY-MM-DD' strings. The default parses them as local
// midnight, which shifts the day when the server isn't on UTC.
types.setTypeParser(1082, (v: string) => v);

// Postgres on Box A (72.62.2.34), database `nexxra`. The server uses a
// self-signed cert, so we pin it (PG_CA_CERT, base64 PEM) and skip only the
// hostname check — the connection is still encrypted and authenticated.
declare global {
  var __nexxraPool: Pool | undefined;
  var __nexxraSchema: Promise<void> | undefined;
}

function pool() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  globalThis.__nexxraPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 3,
    idleTimeoutMillis: 10_000,
    ssl: process.env.PG_CA_CERT
      ? { ca: Buffer.from(process.env.PG_CA_CERT, 'base64').toString(), checkServerIdentity: () => undefined }
      : { rejectUnauthorized: false },
  });
  return globalThis.__nexxraPool;
}

const SCHEMA = `
create table if not exists invoices (
  id            uuid primary key default gen_random_uuid(),
  number        text not null unique,
  status        text not null default 'draft' check (status in ('draft','sent','paid','void')),
  public_token  text not null unique,
  client_name   text not null default '',
  client_company text not null default '',
  client_email  text not null default '',
  client_phone  text not null default '',
  client_address text not null default '',
  currency      text not null default 'NGN' check (currency in ('NGN','USD')),
  issue_date    date not null default current_date,
  due_date      date not null default (current_date + 14),
  items         jsonb not null default '[]',
  discount      numeric(14,2) not null default 0,
  tax_rate      numeric(5,2) not null default 0,
  notes         text not null default '',
  sent_at       timestamptz,
  paid_at       timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists invoices_created on invoices (created_at desc);
create table if not exists counters (key text primary key, n integer not null);
create table if not exists settings (key text primary key, value jsonb not null);
`;

async function ensureSchema() {
  globalThis.__nexxraSchema ??= pool().query(SCHEMA).then(() => undefined).catch((e) => {
    globalThis.__nexxraSchema = undefined;
    throw e;
  });
  return globalThis.__nexxraSchema;
}

export async function query<T extends Record<string, unknown> = Record<string, unknown>>(text: string, params: unknown[] = []) {
  await ensureSchema();
  return (await pool().query<T>(text, params)).rows;
}

export async function tx<T>(fn: (c: PoolClient) => Promise<T>): Promise<T> {
  await ensureSchema();
  const c = await pool().connect();
  try {
    await c.query('begin');
    const out = await fn(c);
    await c.query('commit');
    return out;
  } catch (e) {
    await c.query('rollback');
    throw e;
  } finally {
    c.release();
  }
}
