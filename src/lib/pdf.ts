'use client';

export interface ExportOptions { elementId?: string; filename?: string; }

/** A4 at 96 CSS px/in, with 300-DPI raster exports for crisp printing/sharing. */
export const A4_CSS_WIDTH_PX = 794;
export const A4_CSS_HEIGHT_PX = 1123;
export const A4_EXPORT_WIDTH_PX = 2480;
export const A4_EXPORT_HEIGHT_PX = 3508;
export const A4_MM = { width: 210, height: 297 } as const;

function safeFilename(filename: string) {
  return filename.replace(/[^a-z0-9._-]+/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function filenameWithoutExtension(filename: string) {
  return filename.replace(/\.(pdf|png|jpe?g)$/i, '');
}

function getExportElement(elementId = 'print-root') {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Biodata export was not found.');
  return element;
}

async function prepareOnePagePrint(elementId = 'print-root') {
  const root = getExportElement(elementId);
  const pages = Array.from(root.querySelectorAll<HTMLElement>('.print-fit-page'));
  if (!pages.length) return;

  try { await document.fonts?.ready; } catch { /* continue with system fonts */ }
  const images = Array.from(root.querySelectorAll<HTMLImageElement>('img'));
  await Promise.all(images.map(async (image) => {
    try { await image.decode(); } catch { /* an image can still be printable */ }
  }));

  // Fit the rendered A4 artwork to the printable content area while preserving
  // the exact 210 x 297 mm page box. This prevents horizontal clipping and footer overlap.
  const a4HeightPx = (285 / 25.4) * 96;
  pages.forEach((page) => {
    const content = page.querySelector<HTMLElement>('.print-fit-content');
    if (!content) return;
    const template = content.querySelector<HTMLElement>('.template-a4');
    if (!template) {
      content.style.setProperty('--print-scale', '1');
      page.style.setProperty('--print-scale', '1');
      return;
    }
    const previousMinHeight = template.style.minHeight;
    template.style.minHeight = '0';
    const contentHeight = Math.max(template.scrollHeight, template.getBoundingClientRect().height);
    template.style.minHeight = previousMinHeight;
    const scale = Math.min(1, a4HeightPx / Math.max(contentHeight, 1));
    content.style.setProperty('--print-scale', String(scale));
    page.style.setProperty('--print-scale', String(scale));
  });
}

export async function downloadBiodataAsPDF(elementId = 'print-root', filename = 'biodata.pdf') {
  if (typeof window === 'undefined') return;
  await prepareOnePagePrint(elementId);
  const root = getExportElement(elementId);
  const pages = Array.from(root.querySelectorAll<HTMLElement>('.print-fit-page'));
  if (!pages.length) throw new Error('No biodata pages are available for PDF export.');

  // Direct PDF export uses the same selected template + colorway that the user
  // sees in the preview, rasterized at a fixed A4/300-DPI canvas size. This avoids
  // browser print-margin/zoom differences and guarantees a true 210 x 297 mm page.
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });

  for (let index = 0; index < pages.length; index += 1) {
    const canvas = await renderA4Canvas(pages[index]);
    if (index > 0) pdf.addPage('a4', 'portrait');
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.97), 'JPEG', 0, 0, A4_MM.width, A4_MM.height, undefined, 'FAST');
  }

  pdf.save(`${safeFilename(filenameWithoutExtension(filename)) || 'biodata'}.pdf`);
}

async function renderA4Canvas(page: HTMLElement): Promise<HTMLCanvasElement> {
  const html2canvas = (await import('html2canvas')).default;
  return html2canvas(page, {
    scale: A4_EXPORT_WIDTH_PX / A4_CSS_WIDTH_PX,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
    width: A4_CSS_WIDTH_PX,
    height: A4_CSS_HEIGHT_PX,
    windowWidth: A4_CSS_WIDTH_PX,
    windowHeight: A4_CSS_HEIGHT_PX,
    scrollX: 0,
    scrollY: 0,
  });
}

async function createBiodataImage(elementId = 'png-root', format: 'png' | 'jpeg' = 'png'): Promise<Blob> {
  await prepareOnePagePrint(elementId);
  const element = getExportElement(elementId);
  const page = element.querySelector<HTMLElement>('.print-fit-page') ?? element;
  const canvas = await renderA4Canvas(page);
  const mime = format === 'jpeg' ? 'image/jpeg' : 'image/png';
  const quality = format === 'jpeg' ? 0.96 : undefined;
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mime, quality));
  if (!blob) throw new Error(`${format.toUpperCase()} generation failed.`);
  return blob;
}

export async function downloadBiodataAsPNG(elementId = 'png-root', filename = 'biodata.png') {
  const blob = await createBiodataImage(elementId, 'png');
  downloadBlob(blob, `${safeFilename(filenameWithoutExtension(filename)) || 'biodata'}.png`);
}

export async function downloadBiodataAsJPG(elementId = 'png-root', filename = 'biodata.jpg') {
  const blob = await createBiodataImage(elementId, 'jpeg');
  downloadBlob(blob, `${safeFilename(filenameWithoutExtension(filename)) || 'biodata'}.jpg`);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function shareBiodata(title: string, text: string, elementId = 'png-root', filename = 'biodata.png') {
  if (typeof window === 'undefined') return false;
  try {
    const blob = await createBiodataImage(elementId, 'png');
    const file = new File([blob], safeFilename(filenameWithoutExtension(filename)) + '.png', { type: 'image/png' });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title, text, files: [file] });
      return true;
    }
    downloadBlob(blob, file.name);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return true;
    try { await downloadBiodataAsPNG(elementId, filename); } catch { /* fall through to WhatsApp */ }
  }
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  return false;
}
