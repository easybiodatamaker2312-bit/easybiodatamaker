import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getIndiaDateKey, type AnalyticsCloudflareEnv } from '@/lib/analytics/cloudflare-db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FORMATS = ['pdf', 'png', 'jpg', 'word'] as const;
type Format = (typeof FORMATS)[number];
type CountRow = { format: string; total?: number; lifetime?: number };
type VisitorRow = { page_views: number; unique_visitors: number };
type PageViewTotalRow = { total_page_views: number };

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    const db = (env as unknown as AnalyticsCloudflareEnv).ANALYTICS_DB;
    if (!db) return Response.json({ error: 'Analytics database is not bound.' }, { status: 503 });

    const day = getIndiaDateKey();
    const [lifetimeRows, dailyRows, todayVisitors, pageViewTotal] = await Promise.all([
      db.prepare('SELECT format, lifetime FROM download_totals').all<CountRow>(),
      db.prepare('SELECT format, total FROM download_daily WHERE day = ?').bind(day).all<CountRow>(),
      db.prepare('SELECT page_views, unique_visitors FROM visitor_daily WHERE day = ?').bind(day).first<VisitorRow>(),
      db.prepare('SELECT COALESCE(SUM(page_views), 0) AS total_page_views FROM visitor_daily').first<PageViewTotalRow>(),
    ]);

    const lifetime = Object.fromEntries(FORMATS.map((format) => [format, 0])) as Record<Format, number>;
    const today = Object.fromEntries(FORMATS.map((format) => [format, 0])) as Record<Format, number>;
    for (const row of lifetimeRows.results) if (FORMATS.includes(row.format as Format)) lifetime[row.format as Format] = Number(row.lifetime ?? 0);
    for (const row of dailyRows.results) if (FORMATS.includes(row.format as Format)) today[row.format as Format] = Number(row.total ?? 0);

    return Response.json({
      date: day,
      downloads: { lifetime, today },
      visitors: {
        totalPageViews: Number(pageViewTotal?.total_page_views ?? 0),
        todayPageViews: Number(todayVisitors?.page_views ?? 0),
        todayUniqueVisitors: Number(todayVisitors?.unique_visitors ?? 0),
      },
    }, { headers: { 'Cache-Control': 'no-store, max-age=0' } });
  } catch (error) {
    console.error('Cloudflare analytics stats failed:', error);
    return Response.json({ error: 'Could not load analytics.' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}
