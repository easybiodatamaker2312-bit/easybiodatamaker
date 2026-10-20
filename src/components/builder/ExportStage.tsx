'use client';
import React from 'react';
import { createPortal } from 'react-dom';
import { useBiodataStore } from '@/store/biodataStore';
import { colorwayVariables } from '@/components/biodata/template-contract';
import { PhotoGalleryPage, RenderTemplate, useActiveColorway } from '@/components/builder/BiodataRender';

/**
 * Off-screen, fixed-size A4 stage that exists ONLY while a file is being generated
 * (mounted on demand), so editing never pays for hidden duplicate renders.
 * It holds no application UI: no navbar, toolbar, buttons or dialogs.
 */
export function ExportStage({ includeExtraPhotos, footerText }: { includeExtraPhotos: boolean; footerText: string }) {
  const { photos, photoPageMode } = useBiodataStore();
  const { colorway } = useActiveColorway();
  if (typeof document === 'undefined') return null;
  const extraPhotos = photos.slice(1);
  const paper = colorway.variables.paper;
  return createPortal(
    <div className="export-stage" data-export-stage aria-hidden="true">
      <div className="export-page" data-export-biodata-page style={{ ...colorwayVariables(colorway), background: paper }}>
        <div className="export-page-scaler" data-export-scaler>
          <RenderTemplate elementId="export-biodata-document" photosOverride={photos.slice(0, 1)} />
        </div>
        <div className="export-page-footer"><span>{footerText}</span><span data-export-page-number /></div>
      </div>
      {includeExtraPhotos && (photoPageMode === 'single-per-page'
        ? extraPhotos.map((photo) => <div key={photo.id} className="export-page" data-export-extra-page style={{ background: paper }}><PhotoGalleryPage photos={[photo]} singlePhoto /></div>)
        : extraPhotos.length > 0 ? <div className="export-page" data-export-extra-page style={{ background: paper }}><PhotoGalleryPage photos={extraPhotos} /></div> : null)}
    </div>,
    document.body,
  );
}
