'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, Download, Eye, FileImage, FileText, Image as ImageIcon, Radio, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { readDownloadStats, type DownloadAnalytics, type DownloadStats as Stats } from '@/lib/analytics/download-stats';

const formatters = new Intl.NumberFormat('en-IN');
const EMPTY: Stats = { pdf: 0, png: 0, jpg: 0, word: 0 };
const EMPTY_ANALYTICS: DownloadAnalytics = {
  date: '',
  downloads: { lifetime: EMPTY, today: EMPTY },
  visitors: { totalPageViews: 0, todayPageViews: 0, todayUniqueVisitors: 0 },
};
const cards = [
  { key: 'pdf', label: 'PDF downloads', icon: FileText, tint: 'stats-icon-rose' },
  { key: 'png', label: 'PNG downloads', icon: ImageIcon, tint: 'stats-icon-violet' },
  { key: 'jpg', label: 'JPG downloads', icon: FileImage, tint: 'stats-icon-amber' },
  { key: 'word', label: 'Word downloads', icon: Download, tint: 'stats-icon-blue' },
] as const;

function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const from = shown;
    const duration = 700;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setShown(Math.round(from + (value - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <>{formatters.format(shown)}</>;
}

export function DownloadStats() {
  const reduceMotion = useReducedMotion();
  const [stats, setStats] = useState<DownloadAnalytics>(EMPTY_ANALYTICS);
  const [loaded, setLoaded] = useState(false);
  const [connected, setConnected] = useState(false);
  const lifetimeTotal = useMemo(() => Object.values(stats.downloads.lifetime).reduce((sum, value) => sum + value, 0), [stats.downloads.lifetime]);
  const todayTotal = useMemo(() => Object.values(stats.downloads.today).reduce((sum, value) => sum + value, 0), [stats.downloads.today]);

  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setInterval> | undefined;
    const refresh = async () => {
      try {
        const next = await readDownloadStats();
        if (!active) return;
        setStats(next);
        setConnected(true);
      } catch (error) {
        if (active) setConnected(false);
        console.warn('Cloudflare analytics could not be refreshed.', error);
      } finally {
        if (active) setLoaded(true);
      }
    };
    void refresh();
    timer = setInterval(() => void refresh(), 15_000);
    return () => { active = false; if (timer) clearInterval(timer); };
  }, []);

  const summaryCards = [
    { label: 'Total page views', value: stats.visitors.totalPageViews, detail: 'All recorded page visits', icon: Eye, tint: 'stats-icon-blue' },
    { label: 'Unique visitors today', value: stats.visitors.todayUniqueVisitors, detail: 'Approx. unique browsers · India day', icon: Users, tint: 'stats-icon-violet' },
    { label: "Today's page views", value: stats.visitors.todayPageViews, detail: stats.date || 'India time', icon: Activity, tint: 'stats-icon-amber' },
    { label: 'Lifetime downloads', value: lifetimeTotal, detail: 'Successful file exports', icon: Download, tint: 'stats-icon-rose' },
  ];

  return (
    <section className="download-stats-section relative overflow-hidden border-y border-stone-200/70 px-5 py-16 sm:px-8" aria-label="Community visitor and download statistics">
      <div className="stats-orb stats-orb-one" aria-hidden="true" />
      <div className="stats-orb stats-orb-two" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Activity size={14} /> EasyBiodataMaker community</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Growing with every visit and every biodata.</h2>
          <p className="mt-3 text-sm leading-6 text-stone-500">Live visitor and successful download statistics, powered by Cloudflare.</p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map(({ label, value, detail, icon: Icon, tint }, index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .4, delay: index * .05 }} whileHover={reduceMotion ? undefined : { y: -4 }} className="stats-format-card rounded-2xl border border-stone-200/80 bg-white/90 p-5 shadow-sm">
              <div className={`grid size-10 place-items-center rounded-xl ${tint}`}><Icon size={18} /></div>
              <p className="mt-4 text-3xl font-semibold tabular-nums text-ink">{loaded ? <AnimatedNumber value={value} /> : '—'}</p>
              <p className="mt-1 text-xs font-semibold text-stone-600">{label}</p>
              <p className="mt-2 text-[11px] text-stone-500">{detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {cards.map(({ key, label, icon: Icon, tint }, index) => (
            <motion.div key={key} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .4, delay: index * .05 }} className="stats-format-card rounded-2xl border border-stone-200/80 bg-white/90 p-4 shadow-sm sm:p-5">
              <div className={`grid size-10 place-items-center rounded-xl ${tint}`}><Icon size={18} /></div>
              <p className="mt-4 text-2xl font-semibold tabular-nums text-ink">{loaded ? <AnimatedNumber value={stats.downloads.lifetime[key]} /> : '—'}</p>
              <p className="mt-1 text-xs font-medium text-stone-500">{label}</p>
              <p className="mt-2 text-[11px] text-emerald-700">Today: {loaded ? formatters.format(stats.downloads.today[key]) : '—'}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-stone-400"><Radio size={12} className={connected ? 'text-emerald-600' : 'text-stone-400'} /> {connected ? 'Live · Refreshes every 15 seconds' : loaded ? 'Analytics temporarily unavailable' : 'Connecting to Cloudflare analytics…'}</p>
        <p className="mt-2 text-center text-[10px] leading-5 text-stone-400">Unique visitors are estimated using a random browser ID stored on this device. No biodata details are collected.</p>
      </div>
    </section>
  );
}
