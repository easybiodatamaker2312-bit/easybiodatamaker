import { A4_CSS_HEIGHT_PX, A4_CSS_WIDTH_PX } from './constants';

export interface CaptureOptions {
  scale: number;
  background: string;
  fontEmbedCSS: string;
}

export class ExportCaptureError extends Error {
  constructor(message: string, readonly cause?: unknown) { super(message); this.name = 'ExportCaptureError'; }
}

function isWebKit(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
}

function describe(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof Event !== 'undefined' && error instanceof Event) return `resource failed to load (${error.type})`;
  return String(error);
}

/**
 * Rasterise one A4 page with the browser's own text/layout engine (SVG
 * foreignObject). Unlike html2canvas this does not re-implement CSS painting,
 * so gradient text, grid/flex alignment, line boxes and font metrics are
 * identical to the on-screen preview.
 */
export async function capturePage(node: HTMLElement, options: CaptureOptions): Promise<HTMLCanvasElement> {
  const { toCanvas } = await import('html-to-image');
  const base = {
    width: A4_CSS_WIDTH_PX,
    height: A4_CSS_HEIGHT_PX,
    backgroundColor: options.background,
    fontEmbedCSS: options.fontEmbedCSS,
    cacheBust: false,
  } as const;
  try {
    // WebKit paints foreignObject content lazily: the first render can miss fonts/images.
    if (isWebKit()) await toCanvas(node, { ...base, pixelRatio: 0.25 });
    const canvas = await toCanvas(node, { ...base, pixelRatio: options.scale });
    if (canvas.width < 2 || canvas.height < 2) throw new Error('empty canvas');
    return canvas;
  } catch (error) {
    throw new ExportCaptureError(`Page capture failed: ${describe(error)}`, error);
  }
}

/** Try progressively smaller pixel ratios when the device cannot allocate a large canvas. */
export async function capturePageWithFallback(node: HTMLElement, scales: readonly number[], options: Omit<CaptureOptions, 'scale'>): Promise<{ canvas: HTMLCanvasElement; scale: number }> {
  let lastError: unknown;
  for (const scale of scales) {
    try { return { canvas: await capturePage(node, { ...options, scale }), scale }; } catch (error) { lastError = error; }
  }
  throw lastError instanceof Error ? lastError : new ExportCaptureError('Page capture failed');
}

export function canvasToBlob(canvas: HTMLCanvasElement, type: 'image/png' | 'image/jpeg', quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new ExportCaptureError(`${type} encoding failed`))), type, quality);
  });
}
