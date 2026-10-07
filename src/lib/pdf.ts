'use client';

export interface ExportOptions { elementId?: string; filename?: string; }

function safeFilename(filename: string) {
  return filename.replace(/[^a-z0-9._-]+/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
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

  // Each printable page is independently fitted to A4. The biodata page is
  // capped at 285mm of content so the brand footer has its own safe area.
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
    // Measure actual content without the A4 min-height. Otherwise a short
    // template gets unnecessarily scaled down and leaves a large blank area.
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
  const previousTitle = document.title;
  document.title = safeFilename(filename.replace(/\.pdf$/i, '')) || 'biodata';
  const restore = () => {
    document.title = previousTitle;
    window.removeEventListener('afterprint', restore);
  };
  window.addEventListener('afterprint', restore, { once: true });
  window.print();
  window.setTimeout(restore, 3000);
}

async function createBiodataPNG(elementId = 'png-root'): Promise<Blob> {
  const html2canvas = (await import('html2canvas')).default;
  await prepareOnePagePrint(elementId);
  const element = getExportElement(elementId);
  const page = element.querySelector<HTMLElement>('.print-fit-page') ?? element;

  const canvas = await html2canvas(page, {
    scale: Math.min(3, Math.max(2, window.devicePixelRatio || 2)),
    useCORS: true,
    allowTaint: false,
    backgroundColor: '#FBF7F0',
    logging: false,
    width: page.scrollWidth,
    height: page.scrollHeight,
    windowWidth: page.scrollWidth,
    windowHeight: page.scrollHeight,
  });
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('PNG generation failed.');
  return blob;
}

export async function downloadBiodataAsPNG(elementId = 'png-root', filename = 'biodata.png') {
  const blob = await createBiodataPNG(elementId);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = safeFilename(filename) || 'biodata.png';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export async function shareBiodata(title: string, text: string, elementId = 'png-root', filename = 'biodata.png') {
  if (typeof window === 'undefined') return false;
  try {
    const blob = await createBiodataPNG(elementId);
    const file = new File([blob], safeFilename(filename) || 'biodata.png', { type: 'image/png' });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title, text, files: [file] });
      return true;
    }
    await downloadBiodataAsPNG(elementId, filename);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return true;
    try { await downloadBiodataAsPNG(elementId, filename); } catch { /* fall through to WhatsApp */ }
  }
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  return false;
}
