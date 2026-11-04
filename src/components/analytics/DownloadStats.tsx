'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, Download, FileImage, FileText, Image as ImageIcon, Radio, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { readDownloadStats, type DownloadAnalytics, type DownloadStats as Stats } from '@/lib/analytics/download-stats';

const formatters = new Intl.NumberFormat('en-IN');
const EMPTY: Stats = { pdf: 0, png: 0, jpg: 0, word: 0 };
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
    const duration = 850;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setShown(Math.round(from + (value - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // Animate only when the incoming value changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <>{formatters.format(shown)}</>;
}

export function DownloadStats() {
  const databaseConfigured = Boolean(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL?.trim());
  const reduceMotion = useReducedMotion();
  const [stats, setStats] = useState<DownloadAnalytics>({ lifetime: EMPTY, today: EMPTY, date: '' });
  const [loaded, setLoaded] = useState(false);
  const [connected, setConnected] = useState(false);
  const lifetimeTotal = useMemo(() => Object.values(stats.lifetime).reduce((sum, value) => sum + value, 0), [stats.lifetime]);
  const todayTotal = useMemo(() => Object.values(stats.today).reduce((sum, value) => sum + value, 0), [stats.today]);

  useEffect(() => {
    if (!databaseConfigured) return;
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
        console.warn('Download statistics could not be refreshed.', error);
      } finally {
        if (active) setLoaded(true);
      }
    };
    void refresh();
    timer = setInterval(() => void refresh(), 10_000);
    return () => { active = false; if (timer) clearInterval(timer); };
  }, [databaseConfigured]);

  if (!databaseConfigured) {
    return (
      <section className="download-stats-section relative overflow-hidden border-y border-rose-200/70 px-5 py-14 sm:px-8" aria-label="Community download statistics">
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><Sparkles size={14} /> Community download counter</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#71334F] sm:text-4xl">Every biodata made is a little milestone.</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">The live counter is ready to connect. Add your Firebase database URL to activate shared lifetime and daily download totals.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ key, label, icon: Icon, tint }) => (
              <div key={key} className="stats-format-card rounded-2xl border border-rose-100 bg-white/90 p-5 shadow-sm">
                <div className={`grid size-10 place-items-center rounded-xl ${tint}`}><Icon size={18} /></div>
                <p className="mt-4 text-3xl font-semibold tabular-nums text-[#71334F]">—</p>
                <p className="mt-1 text-xs font-semibold text-stone-600">{label}</p>
                <p className="mt-2 text-[11px] text-stone-500">Waiting for Firebase setup</p>
              </div>
            ))}
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-amber-800"><Radio size={13} /> Live counter not configured yet · See FIREBASE-DOWNLOAD-STATS-SETUP.md</p>
        </div>
      </section>
    );
  }

  return (
    <section className="download-stats-section relative overflow-hidden border-y border-stone-200/70 px-5 py-16 sm:px-8" aria-label="Community download statistics">
      <div className="stats-orb stats-orb-one" aria-hidden="true" />
      <div className="stats-orb stats-orb-two" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Sparkles size={14} /> The community is creating</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Little stories. Thousands of new beginnings.</h2>
          <p className="mt-3 text-sm leading-6 text-stone-500">Every successful export adds to the community count. Updated live from our shared counter.</p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-[1.15fr_.85fr]">
          <motion.div whileHover={reduceMotion ? undefined : { y: -5, scale: 1.012 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="stats-total-card group relative overflow-hidden rounded-[2rem] p-7 text-white shadow-xl sm:p-9">
            <div className="stats-card-glow" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-white/85"><Activity size={13} /> Lifetime downloads</span>
              <span className="flex items-center gap-2 text-xs text-white/75"><span className={`size-2 rounded-full ${connected ? 'bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]' : 'bg-amber-300'}`} />{connected ? 'Live' : 'Connecting'}</span>
            </div>
            <p className="relative mt-7 font-display text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl" aria-live="polite">{loaded ? <AnimatedNumber value={lifetimeTotal} /> : '—'}</p>
            <div className="relative mt-3 flex items-center justify-between gap-4 text-xs text-white/65"><span>All successful PDF, image & Word exports</span><span>↗ Growing together</span></div>
          </motion.div>

          <motion.div whileHover={reduceMotion ? undefined : { y: -5, scale: 1.012 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="stats-today-card relative overflow-hidden rounded-[2rem] border border-amber-200/70 p-7 shadow-lg sm:p-9">
            <div className="relative flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.14em] text-amber-900/70">Today's downloads</span><span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Resets daily</span></div>
            <p className="relative mt-7 font-display text-5xl font-semibold tracking-tight text-ink tabular-nums sm:text-6xl" aria-live="polite">{loaded ? <AnimatedNumber value={todayTotal} /> : '—'}</p>
            <p className="relative mt-3 text-xs text-stone-600">New biodatas exported today · {stats.date || 'India time'}</p>
            <div className="stats-today-sparkle" aria-hidden="true">✦</div>
          </motion.div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {cards.map(({ key, label, icon: Icon, tint }, index) => (
            <motion.div key={key} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .45, delay: index * .07 }} whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 2 === 0 ? -.7 : .7 }} className="stats-format-card rounded-2xl border border-stone-200/80 bg-white/90 p-4 shadow-sm sm:p-5">
              <div className={`grid size-10 place-items-center rounded-xl ${tint}`}><Icon size={18} /></div>
              <p className="mt-4 text-2xl font-semibold tabular-nums text-ink">{loaded ? <AnimatedNumber value={stats.lifetime[key]} /> : '—'}</p>
              <p className="mt-1 text-xs font-medium text-stone-500">{label}</p>
              <p className="mt-2 text-[11px] text-emerald-700">Today: {loaded ? formatters.format(stats.today[key]) : '—'}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-stone-400"><Radio size={12} className={connected ? 'text-emerald-600' : 'text-stone-400'} /> {connected ? 'Live · Refreshes every 10 seconds' : loaded ? 'Reconnecting to live statistics…' : 'Connecting to live statistics…'}</p>
      </div>
    </section>
  );
}
