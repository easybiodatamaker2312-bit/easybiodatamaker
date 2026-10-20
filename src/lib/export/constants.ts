/**
 * Export geometry. A4 at 96 CSS px/in = 794 x 1123 px. Raster exports are
 * produced at a pixel ratio so a 794 px wide page becomes 2480 px (300 DPI).
 */
export const A4_CSS_WIDTH_PX = 794;
export const A4_CSS_HEIGHT_PX = 1123;
export const A4_EXPORT_WIDTH_PX = 2480;
export const A4_EXPORT_HEIGHT_PX = 3508;
export const A4_MM = { width: 210, height: 297 } as const;

/** Pixel ratios tried in order if the browser cannot allocate a larger canvas. */
export const IMAGE_SCALE_LADDER = [A4_EXPORT_WIDTH_PX / A4_CSS_WIDTH_PX, 2, 1.5] as const;
export const PDF_SCALE_LADDER = [2.5, 2, 1.5] as const;
export const PDF_JPEG_QUALITY = 0.92;
export const IMAGE_JPEG_QUALITY = 0.95;

/** Space kept free at the bottom of every page for the "Created with" footer. */
export const FOOTER_ZONE_PX = 44;

/**
 * Policy thresholds. A biodata whose natural height is <= page height is exported 1:1.
 * A slight overflow is scaled to a single page only if text stays >= 88% of the
 * designed size; anything longer is paginated at full size (readability first).
 */
export const MIN_AUTO_FIT_SCALE = 0.88;

export type PageMode = 'auto' | 'one-page';
export type ExportFormat = 'pdf' | 'png' | 'jpg';
