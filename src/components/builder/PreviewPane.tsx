'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Share2, Download, Save, Images, FileImage, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useBiodataStore } from '@/store/biodataStore';
import { TRANSLATIONS } from '@/lib/translations';
import { downloadFiles, renderExport, shareFiles, ExportBusyError, type ExportFormat, type ExportOutcome, type ExportProgress, type PageMode } from '@/lib/pdf';
import { A4_CSS_HEIGHT_PX, FOOTER_ZONE_PX, MIN_AUTO_FIT_SCALE } from '@/lib/export/constants';
import { choosePagePlan } from '@/lib/export/paginate';
import { downloadBiodataAsWord } from '@/lib/word-export';
import { useBiodataView } from '@/lib/useBiodataView';
import { PhotoGalleryPage, RenderTemplate, useActiveColorway } from '@/components/builder/BiodataRender';
import { ExportStage } from '@/components/builder/ExportStage';

const EXPORT_FOOTER = 'Created with EasyBiodataMaker.com - Free Marriage Biodata Maker';
type Busy = ExportFormat | 'word' | 'share' | null;
type Status = { tone: 'info' | 'success' | 'error'; text: string } | null;
const LABEL: Record<ExportFormat, string> = { pdf: 'PDF', png: 'PNG', jpg: 'JPG' };
const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

/** Approximate page count for the live preview (exact planning happens at export time). */
function usePageEstimate(mode: PageMode) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const el = document.getElementById('biodata-preview-live');
    if (!el || typeof ResizeObserver === 'undefined') return;
    const update = () => setHeight(el.scrollHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  if (!height) return null;
  const plan = choosePagePlan({ naturalHeight: height, pageHeight: A4_CSS_HEIGHT_PX, footerZone: FOOTER_ZONE_PX, mode, minFitScale: MIN_AUTO_FIT_SCALE });
  if (plan.kind === 'single') return { pages: 1, scale: plan.scale };
  return { pages: Math.max(2, Math.ceil(height / (A4_CSS_HEIGHT_PX - 120))), scale: 1 };
}

export function PreviewPane() {
  const { data, language, sectionOrder, optionalFields, contactVisible, photos, customFields, fieldOrder, photoPageMode } = useBiodataStore();
  const { definition, colorway } = useActiveColorway();
  const [busy, setBusy] = useState<Busy>(null);
  const [status, setStatus] = useState<Status>(null);
  const [stageFor, setStageFor] = useState<ExportFormat | null>(null);
  const [pageMode, setPageMode] = useState<PageMode>('auto');
  const busyRef = useRef(false);
  const mounted = useRef(true);
  const statusTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => { mounted.current = false; window.clearTimeout(statusTimer.current); }, []);

  const safeLanguage = language in TRANSLATIONS ? language : 'en';
  const shareText = `${data.fullName || TRANSLATIONS[safeLanguage].marriageBiodata} · EasyBiodataMaker`;
  const filename = `${data.fullName || 'biodata'}`;
  const view = useBiodataView(data, safeLanguage, sectionOrder, optionalFields, contactVisible, photos, customFields, fieldOrder);
  const estimate = usePageEstimate(pageMode);
  const extraPhotos = photos.slice(1);

  const flash = useCallback((next: Status, ms = 7000) => {
    if (!mounted.current) return;
    setStatus(next);
    window.clearTimeout(statusTimer.current);
    if (next && next.tone !== 'info') statusTimer.current = window.setTimeout(() => setStatus(null), ms);
  }, []);

  /** Mount the stage with the latest store data, render it to files, then always unmount it. */
  const generate = useCallback(async (format: ExportFormat): Promise<ExportOutcome> => {
    flushSync(() => setStageFor(format));
    try {
      await nextFrame();
      const stage = document.querySelector<HTMLElement>('[data-export-stage]');
      if (!stage) throw new Error('Export stage was not created.');
      const onProgress = (p: ExportProgress) => {
        const what = p.stage === 'fonts' ? 'Preparing fonts and photos' : p.stage === 'layout' ? 'Laying out pages' : p.pages && p.pages > 1 ? `Rendering page ${p.page} of ${p.pages}` : 'Rendering';
        flash({ tone: 'info', text: `${what}…` });
      };
      return await renderExport(stage, { format, filename, pageMode, onProgress });
    } finally {
      if (mounted.current) setStageFor(null);
    }
  }, [filename, flash, pageMode]);

  const run = useCallback(async (kind: Exclude<Busy, null>, task: () => Promise<void>, label: string) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(kind);
    flash({ tone: 'info', text: `Generating your ${label}…` });
    try {
      await task();
    } catch (error) {
      if (error instanceof ExportBusyError) { flash({ tone: 'info', text: 'An export is already running.' }); return; }
      console.error('Biodata export failed', error);
      flash({ tone: 'error', text: `We couldn’t create your ${label}. Please try again; if it keeps happening, use the Word download.` }, 12000);
    } finally {
      busyRef.current = false;
      if (mounted.current) setBusy(null);
    }
  }, [flash]);

  const exportFile = (format: ExportFormat) => run(format, async () => {
    const outcome = await generate(format);
    await downloadFiles(outcome.files);
    const count = format === 'pdf' ? outcome.totalPages : outcome.biodataPages;
    const pages = count > 1 ? ` (${count} A4 pages)` : '';
    const note = outcome.warnings[0] ? ` ${outcome.warnings[0]}` : '';
    flash({ tone: 'success', text: `${LABEL[format]} downloaded${pages}.${note}` });
  }, LABEL[format]);

  const exportWord = () => run('word', async () => {
    await downloadBiodataAsWord(view, `${filename}.docx`);
    flash({ tone: 'success', text: 'Word document downloaded.' });
  }, 'Word document');

  const share = () => run('share', async () => {
    const outcome = await generate('png');
    const shared = await shareFiles(outcome.files, data.fullName || TRANSLATIONS[safeLanguage].marriageBiodata, shareText);
    flash({ tone: 'success', text: shared ? 'Ready to share.' : 'Image downloaded; WhatsApp opened for your message.' });
  }, 'image');

  const isBusy = busy !== null;
  const spinner = (kind: Busy) => busy === kind ? <Loader2 size={15} className="animate-spin" aria-hidden="true" /> : null;
  const btnLabel = (kind: ExportFormat, idle: string) => busy === kind ? `Generating ${LABEL[kind]}…` : idle;

  return <div data-testid="biodata-preview-container">
    <div className="builder-preview-shell"><div className="builder-a4-wrap"><div className="builder-a4-scale"><RenderTemplate elementId="biodata-preview-live" /></div></div></div>
    <div className="mt-3 flex flex-wrap gap-2 no-print" aria-busy={isBusy}>
      <button type="button" className="btn-primary disabled:opacity-60" disabled={isBusy} onClick={() => exportFile('pdf')}>{spinner('pdf') ?? <Save size={15} />} {btnLabel('pdf', 'Download Premium PDF')}</button>
      <button type="button" className="btn-secondary disabled:opacity-60" disabled={isBusy} onClick={() => exportFile('png')}>{spinner('png') ?? <Download size={15} />} {btnLabel('png', 'Download PNG')}</button>
      <button type="button" className="btn-secondary disabled:opacity-60" disabled={isBusy} onClick={() => exportFile('jpg')}>{spinner('jpg') ?? <FileImage size={15} />} {btnLabel('jpg', 'Download JPG')}</button>
      <button type="button" className="btn-secondary disabled:opacity-60" disabled={isBusy} onClick={exportWord}>{spinner('word') ?? <Download size={15} />} {busy === 'word' ? 'Generating Word…' : 'Download Word'}</button>
      <button type="button" className="btn-secondary disabled:opacity-60" disabled={isBusy} onClick={share}>{spinner('share') ?? <Share2 size={15} />} Share / WhatsApp</button>
    </div>
    <div role="status" aria-live="polite" className="no-print">
      {status && <p className={`mt-2 flex items-start gap-2 rounded-xl border px-3 py-2 text-xs leading-5 ${status.tone === 'error' ? 'border-red-200 bg-red-50 text-red-800' : status.tone === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-stone-200 bg-white text-stone-600'}`}>
        {status.tone === 'success' ? <CheckCircle2 size={14} className="mt-0.5 shrink-0" /> : status.tone === 'error' ? <AlertCircle size={14} className="mt-0.5 shrink-0" /> : <Loader2 size={14} className="mt-0.5 shrink-0 animate-spin" />}
        <span>{status.text}</span>
      </p>}
    </div>
    <div className="no-print mt-3 flex flex-wrap items-center gap-2 rounded-2xl border border-stone-200 bg-white/80 px-3.5 py-2.5 text-xs text-stone-600 shadow-sm"><span className="font-semibold text-stone-800">Export theme</span><span>{definition.name}</span><span className="text-stone-300">•</span><span>{colorway.name}</span><span className="ml-auto text-stone-500">A4 · 300 DPI JPG/PNG · print-ready PDF</span></div>
    <fieldset className="no-print mt-2 rounded-2xl border border-stone-200 bg-white/80 px-3.5 py-2.5 text-xs text-stone-600" disabled={isBusy}>
      <legend className="px-1 font-semibold text-stone-800">Page layout</legend>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        <label className="flex cursor-pointer items-center gap-2"><input type="radio" name="page-mode" checked={pageMode === 'auto'} onChange={() => setPageMode('auto')} className="accent-[var(--antique-gold)]" /> Readable (more pages if needed)</label>
        <label className="flex cursor-pointer items-center gap-2"><input type="radio" name="page-mode" checked={pageMode === 'one-page'} onChange={() => setPageMode('one-page')} className="accent-[var(--antique-gold)]" /> Fit on one page</label>
      </div>
      {estimate && <p className="mt-1.5 text-stone-500" data-testid="page-estimate">{estimate.pages === 1 ? (estimate.scale < 1 ? `Exports on 1 A4 page, scaled to ${Math.round(estimate.scale * 100)}% so everything fits.` : 'Exports on 1 A4 page.') : `Exports on about ${estimate.pages} A4 pages. Sections are kept together and text stays full size.`} PNG/JPG download one file per page.</p>}
    </fieldset>
    <p className="no-print mt-2 text-xs leading-5 text-stone-500">Downloads use the same template and colorway as this preview at a fixed A4 size, so browser zoom and print margins cannot change the layout. JPG and PNG are 2480 × 3508 px (300 DPI equivalent). Extra photos remain separate A4 pages in the PDF.</p>
    {extraPhotos.length > 0 && <div className="mt-6 no-print"><div className="mb-3 flex items-center gap-2"><Images size={15} className="text-[var(--antique-gold)]" /><p className="text-sm font-semibold">Export preview</p><span className="text-xs text-stone-500">Page 1 + {photoPageMode === 'single-per-page' ? `${extraPhotos.length} photo page${extraPhotos.length > 1 ? 's' : ''}` : '1 photo gallery page'}</span></div><div className="space-y-5"><div className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page 1 · Biodata</div><div className="overflow-hidden rounded-xl border border-stone-100"><div className="mx-auto w-full max-w-[720px]"><RenderTemplate elementId="visible-export-preview-biodata" photosOverride={photos.slice(0, 1)} /></div></div></div>{photoPageMode === 'single-per-page' ? extraPhotos.map((photo, index) => <div key={photo.id} className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page {index + 2} · Photo {index + 2}</div><div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-xl border border-stone-100"><PhotoGalleryPage photos={[photo]} singlePhoto /></div></div>) : <div className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page 2 · All additional photos</div><div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-xl border border-stone-100"><PhotoGalleryPage photos={extraPhotos} /></div></div>}</div></div>}
    {stageFor && <ExportStage includeExtraPhotos={stageFor === 'pdf'} footerText={EXPORT_FOOTER} />}
  </div>;
}
