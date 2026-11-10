export type DownloadFormat = 'pdf' | 'png' | 'jpg' | 'word';
export type DownloadStats = Record<DownloadFormat, number>;
export type DownloadAnalytics = {
  date: string;
  downloads: { lifetime: DownloadStats; today: DownloadStats };
  visitors: { totalPageViews: number; todayPageViews: number; todayUniqueVisitors: number };
};

/** Record an export only after the browser export/download flow has completed. */
export async function recordDownload(format: DownloadFormat): Promise<void> {
  const response = await fetch('/api/analytics/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'download', format }),
    keepalive: true,
  });
  if (!response.ok) throw new Error(`Download analytics failed (${response.status}).`);
}

export async function readDownloadStats(signal?: AbortSignal): Promise<DownloadAnalytics> {
  const response = await fetch('/api/analytics/stats', { cache: 'no-store', signal });
  if (!response.ok) throw new Error(`Analytics request failed (${response.status}).`);
  return response.json() as Promise<DownloadAnalytics>;
}
