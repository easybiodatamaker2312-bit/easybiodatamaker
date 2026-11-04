export type DownloadFormat = 'pdf' | 'png' | 'jpg' | 'word';
export type DownloadStats = Record<DownloadFormat, number>;
export type DownloadAnalytics = { lifetime: DownloadStats; today: DownloadStats; date: string };

const FORMATS: DownloadFormat[] = ['pdf', 'png', 'jpg', 'word'];
const EMPTY_STATS: DownloadStats = { pdf: 0, png: 0, jpg: 0, word: 0 };

function getDatabaseUrl(): string | null {
  const value = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL?.trim();
  return value ? value.replace(/\/+$/, '') : null;
}

/** Use the site's Indian calendar date so the daily counter resets at midnight IST. */
export function getIndiaDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date);
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}

function parseStats(raw: unknown): DownloadStats {
  const values = raw && typeof raw === 'object' ? raw as Record<string, unknown> : {};
  return FORMATS.reduce((result, format) => {
    const count = values[format];
    result[format] = typeof count === 'number' && Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
    return result;
  }, { ...EMPTY_STATS });
}

/** Read lifetime and today's shared counters from Firebase Realtime Database. */
export async function readDownloadStats(signal?: AbortSignal): Promise<DownloadAnalytics> {
  const baseUrl = getDatabaseUrl();
  if (!baseUrl) throw new Error('Download statistics are not configured.');
  const date = getIndiaDateKey();
  // Read only today's bucket rather than the entire daily history (which grows over time).
  const [lifetimeResponses, todayResponse] = await Promise.all([
    Promise.all(FORMATS.map((format) => fetch(`${baseUrl}/downloadStats/${format}.json`, { cache: 'no-store', signal }))),
    fetch(`${baseUrl}/downloadStats/daily/${date}.json`, { cache: 'no-store', signal }),
  ]);
  const lifetimeValues: Record<string, unknown> = {};
  for (let index = 0; index < FORMATS.length; index += 1) {
    const response = lifetimeResponses[index];
    if (!response.ok) throw new Error(`Could not read lifetime ${FORMATS[index]} count (${response.status}).`);
    lifetimeValues[FORMATS[index]] = await response.json();
  }
  if (!todayResponse.ok) throw new Error(`Could not read today's download counts (${todayResponse.status}).`);
  const todayRaw: unknown = await todayResponse.json();
  return { lifetime: parseStats(lifetimeValues), today: parseStats(todayRaw), date };
}

/** Atomically increment a counter using Firebase ETag/If-Match to avoid lost updates. */
async function incrementCounter(url: string): Promise<void> {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const current = await fetch(url, { method: 'GET', cache: 'no-store', headers: { 'X-Firebase-ETag': 'true' } });
    if (!current.ok) throw new Error(`Could not read download counter (${current.status}).`);
    const etag = current.headers.get('ETag');
    if (!etag) throw new Error('Firebase did not return a counter version (ETag).');
    const previous: unknown = await current.json();
    const currentCount = typeof previous === 'number' && Number.isFinite(previous) ? previous : 0;
    const updated = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'if-match': etag },
      body: JSON.stringify(currentCount + 1),
    });
    if (updated.ok) return;
    if (updated.status !== 412) throw new Error(`Could not update download counter (${updated.status}).`);
  }
  throw new Error('Could not safely update download counter after several attempts.');
}

/** Record one completed export in both lifetime and India-day counters. */
export async function recordDownload(format: DownloadFormat): Promise<void> {
  const baseUrl = getDatabaseUrl();
  if (!baseUrl) return;
  const date = getIndiaDateKey();
  await Promise.all([
    incrementCounter(`${baseUrl}/downloadStats/${format}.json`),
    incrementCounter(`${baseUrl}/downloadStats/daily/${date}/${format}.json`),
  ]);
}

export const DOWNLOAD_FORMATS: DownloadFormat[] = FORMATS;
