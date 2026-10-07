'use client';

import type { BiodataViewModel } from '@/lib/useBiodataView';

function safeFilename(filename: string) {
  return filename.replace(/[^a-z0-9._-]+/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'biodata';
}

const FONT_BY_LANGUAGE: Record<BiodataViewModel['language'], string> = {
  en: 'Aptos', hi: 'Noto Sans Devanagari', gu: 'Noto Sans Gujarati', mr: 'Noto Sans Devanagari',
  ta: 'Noto Sans Tamil', te: 'Noto Sans Telugu', bn: 'Noto Sans Bengali', pa: 'Noto Sans Gurmukhi', kn: 'Noto Sans Kannada',
};

export async function downloadBiodataAsWord(view: BiodataViewModel, filename = 'biodata.docx') {
  const { Document, Footer, Packer, Paragraph, Table, TableCell, TableRow, TextRun, AlignmentType, WidthType } = await import('docx');
  const font = FONT_BY_LANGUAGE[view.language];
  const rows = view.sections.filter((section) => section.key !== 'photos').flatMap((section) => [
    new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: section.title, bold: true, font })] })], width: { size: 32, type: WidthType.PERCENTAGE } }), new TableCell({ children: [new Paragraph('')], width: { size: 68, type: WidthType.PERCENTAGE } })] }),
    ...section.rows.map((row) => new TableRow({ children: [
      new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row.label, bold: true, font })] })] }),
      new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: row.value, font })] })] }),
    ] })),
  ]);
  const doc = new Document({
    sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 720, right: 720, bottom: 900, left: 720 } } }, footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Created with EasyBiodataMaker.com - Free Marriage Biodata Maker', size: 16, font })] })] }) }, children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 180 }, children: [new TextRun({ text: view.fullName || 'Marriage Biodata', bold: true, size: 32, font })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 260 }, children: [new TextRun({ text: 'Marriage Biodata', size: 20, font })] }),
      ...(rows.length ? [new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows })] : [new Paragraph({ children: [new TextRun({ text: 'Add your biodata details in EasyBiodataMaker.', font })] })]),
    ] }],
  });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${safeFilename(filename.replace(/\.docx$/i, '')) || 'biodata'}.docx`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
