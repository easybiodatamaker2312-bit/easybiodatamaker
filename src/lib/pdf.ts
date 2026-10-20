'use client';

/**
 * Biodata export pipeline (PDF / PNG / JPG).
 *
 * The caller mounts an <ExportStage> (same template component + same store data as the
 * live preview, laid out at a fixed 794 x 1123 px A4 box) and passes it here:
 *
 *   1. wait for the exact fonts and images the export uses (no arbitrary sleeps)
 *   2. decide the page plan: 1:1, mild fit-to-page, or readable multi-page
 *   3. rasterise each page with the browser's own layout/text engine (html-to-image)
 *   4. assemble PDF (jsPDF) or PNG/JPEG blobs
 */
import {
  A4_CSS_HEIGHT_PX, A4_CSS_WIDTH_PX, A4_EXPORT_HEIGHT_PX, A4_EXPORT_WIDTH_PX, A4_MM,
  FOOTER_ZONE_PX, IMAGE_JPEG_QUALITY, IMAGE_SCALE_LADDER, MIN_AUTO_FIT_SCALE, PDF_JPEG_QUALITY, PDF_SCALE_LADDER,
  type ExportFormat, type PageMode,
} from '@/lib/export/constants';
import { analyse, applyWindow, measureWindow } from '@/lib/export/dom';
import { buildFontEmbedCSS, waitForExportReady } from '@/lib/export/fonts';
import { canvasToBlob, capturePageWithFallback } from '@/lib/export/capture';
import { choosePagePlan, paginate } from '@/lib/export/paginate';

export { A4_CSS_HEIGHT_PX, A4_CSS_WIDTH_PX, A4_EXPORT_HEIGHT_PX, A4_EXPORT_WIDTH_PX, A4_MM };
export type { ExportFormat, PageMode };

export type ExportStageName = 'fonts' | 'layout' | 'render' | 'encode';
export interface ExportProgress { stage: ExportStageName; page?: number; pages?: number }

export interface ExportRequest {
  format: ExportFormat;
  /** File name without extension (sanitised here). */
  filename: string;
  pageMode?: PageMode;
  onProgress?: (progress: ExportProgress) => void;
}

export interface ExportedFile { name: string; blob: Blob }
export interface ExportOutcome {
  files: ExportedFile[];
  /** Number of biodata pages (extra photo pages in a PDF are counted separately). */
  biodataPages: number;
  totalPages: number;
  layout: 'single' | 'paginated';
  /** Text scale applied when a single page had to be shrunk (1 = designed size). */
  fitScale: number;
  warnings: string[];
  timings: { readyMs: number; layoutMs: number; renderMs: number; totalMs: number };
}

export class ExportBusyError extends Error { constructor() { super('Another export is already running.'); this.name = 'ExportBusyError'; } }

let exportInFlight = false;

export function safeFilename(filename: string): string {
  const cleaned = filename
    .replace(/\.(pdf|png|jpe?g)$/i, '')
    .replace(/[^\p{L}\p{M}\p{N}._-]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '')
    .slice(0, 80);
  return cleaned || 'biodata';
}

function requireElement<T extends Element>(parent: ParentNode, selector: string, what: string): T {
  const el = parent.querySelector<T>(selector);
  if (!el) throw new Error(`The ${what} is not available for export.`);
  return el;
}

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

interface PageWindow { lo: number; hi: number }

/** Render the stage to files. Never downloads anything by itself. */
export async function renderExport(stage: HTMLElement, request: ExportRequest): Promise<ExportOutcome> {
  if (typeof window === 'undefined') throw new Error('Export is only available in the browser.');
  if (exportInFlight) throw new ExportBusyError();
  exportInFlight = true;
  const t0 = performance.now();
  const report = request.onProgress ?? (() => undefined);
  const warnings: string[] = [];
  try {
    const bioPage = requireElement<HTMLElement>(stage, '[data-export-biodata-page]', 'biodata page');
    const scaler = requireElement<HTMLElement>(bioPage, '[data-export-scaler]', 'biodata layout');
    const root = requireElement<HTMLElement>(scaler, '.template-a4', 'template');
    const extraPages = request.format === 'pdf' ? Array.from(stage.querySelectorAll<HTMLElement>('[data-export-extra-page]')) : [];
    const pageNumber = bioPage.querySelector<HTMLElement>('[data-export-page-number]');
    const background = getComputedStyle(bioPage).backgroundColor || '#ffffff';

    // 1 — readiness (real signals: loaded FontFaces and decoded images)
    report({ stage: 'fonts' });
    const readiness = await waitForExportReady(stage);
    if (readiness.fontsFailed.length) warnings.push('Some fonts could not be loaded; the closest available font was used.');
    if (readiness.imagesFailed) warnings.push('A photo could not be loaded and was left out.');
    const fontEmbedCSS = await buildFontEmbedCSS(stage);
    await nextFrame();
    const readyMs = performance.now() - t0;

    // 2 — page plan, measured on the natural (unscaled, unpaginated) layout
    report({ stage: 'layout' });
    const tLayout = performance.now();
    scaler.style.transform = 'none';
    scaler.style.left = '0px';
    const analysis = analyse(root);
    let plan = choosePagePlan({ naturalHeight: analysis.naturalHeight, pageHeight: A4_CSS_HEIGHT_PX, footerZone: FOOTER_ZONE_PX, mode: request.pageMode ?? 'auto', minFitScale: MIN_AUTO_FIT_SCALE });
    if (plan.kind === 'paginated' && analysis.units.length < 2) {
      plan = { kind: 'single', scale: Math.max(0.5, (A4_CSS_HEIGHT_PX - FOOTER_ZONE_PX * 0.5) / analysis.naturalHeight) };
      warnings.push('This layout cannot be split across pages, so it was fitted onto one page.');
    }

    let windows: PageWindow[] = [{ lo: -Infinity, hi: Infinity }];
    let fitScale = 1;
    if (plan.kind === 'single') {
      fitScale = plan.scale;
      if (fitScale < 1) {
        scaler.style.transform = `scale(${fitScale})`;
        scaler.style.left = `${((A4_CSS_WIDTH_PX * (1 - fitScale)) / 2).toFixed(2)}px`;
      }
    } else {
      const { starts, overflowPages } = paginate({
        units: analysis.units,
        limit: A4_CSS_HEIGHT_PX,
        measure: (lo, hi) => measureWindow(analysis, lo, hi),
      });
      windows = starts.map((lo, i) => ({ lo, hi: starts[i + 1] ?? Infinity }));
      if (overflowPages.length) warnings.push('A very large block of text did not fit on its page and may be cut off.');
    }
    const biodataPages = windows.length;
    const totalPages = biodataPages + extraPages.length;
    const layoutMs = performance.now() - tLayout;

    // 3 + 4 — rasterise and assemble
    const tRender = performance.now();
    const ladder = request.format === 'pdf' ? PDF_SCALE_LADDER : IMAGE_SCALE_LADDER;
    const base = safeFilename(request.filename);
    const captureOptions = { background, fontEmbedCSS };
    const files: ExportedFile[] = [];
    let pdf: import('jspdf').jsPDF | null = null;
    if (request.format === 'pdf') {
      const { jsPDF } = await import('jspdf');
      pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
      pdf.setProperties({ title: base, creator: 'EasyBiodataMaker' });
    }
    let usedScale = ladder[0];

    const emit = async (canvas: HTMLCanvasElement, index: number) => {
      report({ stage: 'encode', page: index + 1, pages: totalPages });
      if (pdf) {
        if (index > 0) pdf.addPage('a4', 'portrait');
        pdf.addImage(canvas.toDataURL('image/jpeg', PDF_JPEG_QUALITY), 'JPEG', 0, 0, A4_MM.width, A4_MM.height, undefined, 'FAST');
      } else {
        const isPng = request.format === 'png';
        const blob = await canvasToBlob(canvas, isPng ? 'image/png' : 'image/jpeg', isPng ? undefined : IMAGE_JPEG_QUALITY);
        const suffix = biodataPages > 1 ? `-page-${index + 1}` : '';
        files.push({ name: `${base}${suffix}.${isPng ? 'png' : 'jpg'}`, blob });
      }
      canvas.width = 0; canvas.height = 0; // free the bitmap immediately
    };

    for (let i = 0; i < windows.length; i += 1) {
      report({ stage: 'render', page: i + 1, pages: totalPages });
      if (pageNumber) pageNumber.textContent = biodataPages > 1 ? `Page ${i + 1} of ${biodataPages}` : '';
      const restore = plan.kind === 'paginated' ? applyWindow(analysis, windows[i].lo, windows[i].hi) : () => undefined;
      try {
        const { canvas, scale } = await capturePageWithFallback(bioPage, ladder.slice(ladder.indexOf(usedScale)), captureOptions);
        usedScale = scale;
        await emit(canvas, i);
      } finally {
        restore();
      }
    }
    for (let i = 0; i < extraPages.length; i += 1) {
      report({ stage: 'render', page: biodataPages + i + 1, pages: totalPages });
      const { canvas, scale } = await capturePageWithFallback(extraPages[i], ladder.slice(ladder.indexOf(usedScale)), { background: getComputedStyle(extraPages[i]).backgroundColor || background, fontEmbedCSS });
      usedScale = scale;
      await emit(canvas, biodataPages + i);
    }
    if (usedScale < ladder[0]) warnings.push('Your device could not create the full 300 DPI image, so a slightly lower resolution was used.');
    if (pdf) files.push({ name: `${base}.pdf`, blob: pdf.output('blob') });

    const renderMs = performance.now() - tRender;
    return {
      files, biodataPages, totalPages, layout: plan.kind, fitScale, warnings,
      timings: { readyMs: Math.round(readyMs), layoutMs: Math.round(layoutMs), renderMs: Math.round(renderMs), totalMs: Math.round(performance.now() - t0) },
    };
  } finally {
    exportInFlight = false;
  }
}

/* ------------------------------------------------------------------ delivery */

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Revoke after the browser has started the download (long enough for slow mobile browsers).
  window.setTimeout(() => URL.revokeObjectURL(url), 15_000);
}

export async function downloadFiles(files: ExportedFile[]): Promise<void> {
  for (let i = 0; i < files.length; i += 1) {
    downloadBlob(files[i].blob, files[i].name);
    if (i < files.length - 1) await new Promise((resolve) => setTimeout(resolve, 400)); // browsers throttle simultaneous downloads
  }
}

/** Share page images (Web Share API). Returns true if shared/cancelled, false if the caller should use the WhatsApp text fallback. */
export async function shareFiles(files: ExportedFile[], title: string, text: string): Promise<boolean> {
  const shareable = files.map((file) => new File([file.blob], file.name, { type: file.blob.type }));
  try {
    if (navigator.canShare?.({ files: shareable })) {
      await navigator.share({ title, text, files: shareable });
      return true;
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return true;
  }
  await downloadFiles(files);
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  return false;
}
