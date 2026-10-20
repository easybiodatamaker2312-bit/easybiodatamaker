'use client';
import React from 'react';
import { useBiodataStore, type PhotoItem } from '@/store/biodataStore';
import { TRANSLATIONS, type SupportedLanguage } from '@/lib/translations';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { useBiodataView } from '@/lib/useBiodataView';
import { colorwayVariables } from '@/components/biodata/template-contract';

/**
 * The ONE place the biodata is rendered. The live preview, the "export preview" panel and
 * the export stage all use this component with the same store data, so the downloaded
 * file cannot drift from what the user sees.
 */
export function useActiveColorway() {
  const { templateId, colorwayId } = useBiodataStore();
  const definition = TEMPLATES[(templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId];
  const colorway = definition.colorways.find((item) => item.id === colorwayId) ?? definition.colorways[0];
  return { definition, colorway };
}

export function RenderTemplate({ elementId, photosOverride }: { elementId: string; photosOverride?: PhotoItem[] }) {
  const { data, photos, customFields, templateId, language, contactVisible, sectionOrder, optionalFields, auspiciousSymbol, colorwayId, fieldOrder } = useBiodataStore();
  const safeTemplateId = (templateId in TEMPLATES ? templateId : 'midnight-gold') as TemplateId;
  const safeLanguage = (language in TRANSLATIONS ? language : 'en') as SupportedLanguage;
  const definition = TEMPLATES[safeTemplateId];
  const colorway = definition.colorways.find((item) => item.id === colorwayId) ?? definition.colorways[0];
  const view = useBiodataView(data, safeLanguage, sectionOrder, optionalFields, contactVisible, photosOverride ?? photos, customFields, fieldOrder);
  const Layout = definition.Layout;
  return <div id={elementId} data-template-id={safeTemplateId} style={colorwayVariables(colorway)}><Layout view={view} auspiciousSymbol={auspiciousSymbol} colorway={colorway} /></div>;
}

export function PhotoGalleryPage({ photos, singlePhoto = false }: { photos: PhotoItem[]; singlePhoto?: boolean }) {
  const { colorway } = useActiveColorway();

  // Additional-photo pages are deliberately image-only: no repeated biodata
  // heading, candidate name, or arbitrary "Photo 2" label. The first page
  // already identifies the person; the following pages should feel like a
  // curated photo insert in a premium printed dossier.
  if (singlePhoto) {
    const photo = photos[0];
    return <div className="photo-export-page photo-export-single-page" style={{ ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)' }}>
      <div className="photo-single-frame">
        <div className="photo-single-image-wrap"><img src={photo.dataUrl} alt="Additional biodata photograph" decoding="async" /></div>
      </div>
    </div>;
  }

  return <div className="photo-export-page photo-export-gallery-page" style={{ ...colorwayVariables(colorway), background: 'var(--template-paper)', color: 'var(--template-ink)' }}>
    <div className="photo-export-frame photo-export-gallery-frame">
      <div className="photo-export-grid">
        {photos.map((photo) => <figure key={photo.id} className="photo-export-item">
          <img src={photo.dataUrl} alt="Additional biodata photograph" decoding="async" />
        </figure>)}
      </div>
    </div>
  </div>;
}
