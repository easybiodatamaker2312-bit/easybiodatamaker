/** Minimal D1 types keep this route typed even before Wrangler generates worker types. */
export interface D1RunResult {
  success: boolean;
  meta: { changes: number };
}

export interface D1QueryResult<T> {
  success: boolean;
  results: T[];
  meta: { changes: number };
}

export interface D1Statement {
  bind(...values: Array<string | number | null>): D1Statement;
  run(): Promise<D1RunResult>;
  all<T = Record<string, unknown>>(): Promise<D1QueryResult<T>>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
}

export interface AnalyticsD1Database {
  prepare(query: string): D1Statement;
  batch<T = unknown>(statements: D1Statement[]): Promise<Array<D1RunResult | D1QueryResult<T>>>;
}

export interface AnalyticsCloudflareEnv {
  DB: AnalyticsD1Database;
}

export function getIndiaDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date);
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export async function hashDailyVisitor(day: string, visitorId: string): Promise<string> {
  const bytes = new TextEncoder().encode(`${day}:${visitorId}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}
