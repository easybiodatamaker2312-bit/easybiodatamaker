import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getIndiaDateKey, hashDailyVisitor, type AnalyticsCloudflareEnv } from '@/lib/analytics/cloudflare-db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FORMATS = new Set(['pdf', 'png', 'jpg', 'word']);
const UUID_PATTERN = /^[a-zA-Z0-9-]{16,64}$/;

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store, max-age=0' },
  });
}

export async function POST(request: Request) {
  // Same-origin only: this endpoint is not intended to be a public cross-origin API.
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) return json({ error: 'Invalid origin.' }, 403);
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return json({ error: 'Expected JSON.' }, 415);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 1200) return json({ error: 'Payload too large.' }, 413);
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json({ error: 'Invalid JSON.' }, 400);
  }

  const day = getIndiaDateKey();
  const { env } = getCloudflareContext();
  const db = (env as unknown as AnalyticsCloudflareEnv).DB;
  if (!db) return json({ error: 'Analytics database is not bound.' }, 503);

  try {
    if (body.type === 'download') {
      const format = typeof body.format === 'string' ? body.format.toLowerCase() : '';
      if (!FORMATS.has(format)) return json({ error: 'Unsupported download format.' }, 400);

      // D1 batch executes both aggregate updates together.
      await db.batch([
        db.prepare(`INSERT INTO download_totals (format, lifetime) VALUES (?, 1)
          ON CONFLICT(format) DO UPDATE SET lifetime = lifetime + 1`).bind(format),
        db.prepare(`INSERT INTO download_daily (day, format, total) VALUES (?, ?, 1)
          ON CONFLICT(day, format) DO UPDATE SET total = total + 1`).bind(day, format),
      ]);
      return json({ ok: true });
    }

    if (body.type === 'page_view') {
      const visitorId = typeof body.visitorId === 'string' ? body.visitorId : '';
      if (!UUID_PATTERN.test(visitorId)) return json({ error: 'Invalid visitor ID.' }, 400);

      const visitorHash = await hashDailyVisitor(day, visitorId);
      // The first insert is ignored for repeat visits by the same browser on the same India day.
      // changes() in the following statement is the number of rows inserted by that first statement.
      await db.batch([
        db.prepare('DELETE FROM daily_unique_visitors WHERE day < ?').bind(day),
        db.prepare('INSERT OR IGNORE INTO daily_unique_visitors (day, visitor_hash) VALUES (?, ?)').bind(day, visitorHash),
        db.prepare(`INSERT INTO visitor_daily (day, page_views, unique_visitors)
          VALUES (?, 1, changes())
          ON CONFLICT(day) DO UPDATE SET
            page_views = visitor_daily.page_views + 1,
            unique_visitors = visitor_daily.unique_visitors + changes()`).bind(day),
      ]);
      return json({ ok: true });
    }

    return json({ error: 'Unsupported event type.' }, 400);
  } catch (error) {
    console.error('Cloudflare analytics event failed:', error);
    return json({ error: 'Could not record analytics event.' }, 500);
  }
}
