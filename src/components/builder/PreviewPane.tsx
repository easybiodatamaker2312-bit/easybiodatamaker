'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Share2, Download, Save, Images, FileImage } from 'lucide-react';
import { useBiodataStore, type PhotoItem } from '@/store/biodataStore';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { downloadBiodataAsPDF, downloadBiodataAsPNG, shareBiodata } from '@/lib/pdf';
import { downloadBiodataAsWord } from '@/lib/word-export';
import { useBiodataView } from '@/lib/useBiodataView';
import { colorwayVariables } from '@/components/biodata/template-contract';

function RenderTemplate({ elementId, photosOverride }: { elementId: string; photosOverride?: PhotoItem[] }) {
  const { data, photos, customFields, templateId, language, contactVisible, sectionOrder, optionalFields, auspiciousSymbol, colorwayId, fieldOrder } = useBiodataStore();
  const safeTemplateId = (templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId;
  const safeLanguage = (language in TRANSLATIONS ? language : 'en') as SupportedLanguage;
  const definition = TEMPLATES[safeTemplateId];
  const colorway = definition.colorways.find((item) => item.id === colorwayId) ?? definition.colorways[0];
  const view = useBiodataView(data, safeLanguage, sectionOrder, optionalFields, contactVisible, photosOverride ?? photos, customFields, fieldOrder);
  const Layout = definition.Layout;
  return <div id={elementId} data-template-id={safeTemplateId} style={colorwayVariables(colorway)}><Layout view={view} auspiciousSymbol={auspiciousSymbol} colorway={colorway} /></div>;
}

function PhotoGalleryPage({ photos, singlePhoto = false }: { photos: PhotoItem[]; singlePhoto?: boolean }) {
  const { data, language, templateId, colorwayId } = useBiodataStore();
  const safeLanguage = language in TRANSLATIONS ? language : 'en';
  const definition = TEMPLATES[(templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId];
  const colorway = definition.colorways.find((item) => item.id === colorwayId) ?? definition.colorways[0];
  const title = TRANSLATIONS[safeLanguage].photos;
  if (singlePhoto) {
    const photo = photos[0];
    return <div className="photo-export-page photo-export-single-page" style={{ ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)' }}>
      <div className="photo-single-frame">
        <div className="photo-export-kicker">{TRANSLATIONS[safeLanguage].marriageBiodata}</div>
        <h1>{data.fullName || title}</h1>
        <div className="photo-single-label">{title} · {photos.indexOf(photo) + 2}</div>
        <div className="photo-single-image-wrap"><img src={photo.dataUrl} alt={`${data.fullName || 'Biodata'} photo`} decoding="async" /></div>
      </div>
      <div className="photo-export-footer">Created with EasyBiodataMaker.com - Free Marriage Biodata Maker</div>
    </div>;
  }
  return <div className="photo-export-page" style={{ ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)' }}>
    <div className="photo-export-frame">
      <div className="photo-export-kicker">{TRANSLATIONS[safeLanguage].marriageBiodata}</div>
      <h1>{title}</h1>
      <p>{data.fullName || TRANSLATIONS[safeLanguage].marriageBiodata}</p>
      <div className="photo-export-grid">
        {photos.map((photo, index) => <figure key={photo.id} className="photo-export-item">
          <img src={photo.dataUrl} alt={`${data.fullName || 'Biodata'} photo ${index + 2}`} decoding="async" />
          <figcaption>Photo {index + 2}</figcaption>
        </figure>)}
      </div>
    </div>
    <div className="photo-export-footer">Created with EasyBiodataMaker.com - Free Marriage Biodata Maker</div>
  </div>;
}

export function PreviewPane() {
  const { data, language, sectionOrder, optionalFields, contactVisible, photos, customFields, fieldOrder, photoPageMode, templateId, colorwayId } = useBiodataStore();
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalHost(document.body);
  }, []);
  const safeLanguage = language in TRANSLATIONS ? language : 'en';
  const shareText = `${data.fullName || TRANSLATIONS[safeLanguage].marriageBiodata} · EasyBiodataMaker`;
  const filename = `${data.fullName || 'biodata'}`;
  const view = useBiodataView(data, safeLanguage, sectionOrder, optionalFields, contactVisible, photos, customFields, fieldOrder);
  const definition = TEMPLATES[(templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId];
  const colorway = definition.colorways.find((item) => item.id === colorwayId) ?? definition.colorways[0];
  const extraPhotos = photos.slice(1);
  return <div data-testid="biodata-preview-container">
    <div className="builder-preview-shell"><div className="builder-a4-wrap"><div className="builder-a4-scale"><RenderTemplate elementId="biodata-preview-live" /></div></div></div>
    <div className="mt-3 flex flex-wrap gap-2 no-print">
      <button type="button" className="btn-primary" onClick={() => downloadBiodataAsPDF('print-root', `${filename}.pdf`)}><Save size={15} /> Save as PDF</button>
      <button type="button" className="btn-secondary" onClick={() => downloadBiodataAsPNG('png-root', `${filename}.png`)}><Download size={15} /> Download PNG</button>
      <button type="button" className="btn-secondary" onClick={() => downloadBiodataAsWord(view, `${filename}.docx`)}><Download size={15} /> Download Word</button>
      <button type="button" className="btn-secondary" onClick={() => shareBiodata(data.fullName || TRANSLATIONS[safeLanguage].marriageBiodata, shareText, 'png-root', `${filename}.png`)}><Share2 size={15} /> Share / WhatsApp</button>
    </div>
    <p className="no-print mt-2 text-xs leading-5 text-stone-500">Save as PDF creates page 1 for the biodata, then your extra photos as full A4 pages or one gallery page based on your photo-page setting. PNG and WhatsApp share page 1. Word creates an editable .docx.</p>
    {extraPhotos.length > 0 && <div className="mt-6 no-print"><div className="mb-3 flex items-center gap-2"><Images size={15} className="text-[var(--antique-gold)]" /><p className="text-sm font-semibold">Export preview</p><span className="text-xs text-stone-500">Page 1 + {photoPageMode === 'single-per-page' ? `${extraPhotos.length} photo page${extraPhotos.length > 1 ? 's' : ''}` : '1 photo gallery page'}</span></div><div className="space-y-5"><div className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page 1 · Biodata</div><div className="overflow-hidden rounded-xl border border-stone-100"><div className="mx-auto w-full max-w-[720px]"><RenderTemplate elementId="visible-export-preview-biodata" photosOverride={photos.slice(0, 1)} /></div></div></div>{photoPageMode === 'single-per-page' ? extraPhotos.map((photo, index) => <div key={photo.id} className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page {index + 2} · Photo {index + 2}</div><div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-xl border border-stone-100"><PhotoGalleryPage photos={[photo]} singlePhoto /></div></div>) : <div className="rounded-2xl border border-stone-200 bg-white p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-stone-600"><FileImage size={13} /> Page 2 · All additional photos</div><div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-xl border border-stone-100"><PhotoGalleryPage photos={extraPhotos} /></div></div>}</div></div>}
    {portalHost ? createPortal(
      <>
        <div id="print-root" aria-hidden="true">
          <div className="print-fit-page" style={{ background: colorway.variables.paper }}>
            <div className="print-fit-content"><RenderTemplate elementId="print-biodata-document" photosOverride={photos.slice(0, 1)} /></div>
            <div className="print-page-footer">Created with EasyBiodataMaker.com - Free Marriage Biodata Maker</div>
          </div>
          {photoPageMode === 'single-per-page' ? extraPhotos.map((photo, index) => <div key={photo.id} className="print-fit-page print-photo-page" style={{ background: colorway.variables.paper }}><div className="print-fit-content"><PhotoGalleryPage photos={[photo]} singlePhoto /></div></div>) : extraPhotos.length > 0 ? <div className="print-fit-page print-photo-page" style={{ background: colorway.variables.paper }}><div className="print-fit-content"><PhotoGalleryPage photos={extraPhotos} /></div></div> : null}
        </div>
        <div id="png-root" aria-hidden="true">
          <div className="print-fit-page png-export-page" style={{ background: colorway.variables.paper }}>
            <div className="print-fit-content"><RenderTemplate elementId="png-biodata-document" photosOverride={photos.slice(0, 1)} /></div>
            <div className="print-page-footer">Created with EasyBiodataMaker.com - Free Marriage Biodata Maker</div>
          </div>
        </div>
      </>,
      portalHost
    ) : null}
  </div>;
}
