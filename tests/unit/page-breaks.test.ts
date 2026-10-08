import { describe, expect, it } from 'vitest';
import { calculatePageBreaks } from '@/lib/pdf/page-breaks';

describe('PDF page-break calculations', () => {
  it('keeps a block intact when it fits', () => {
    expect(calculatePageBreaks([{ id: 'a', height: 240 }], 297)).toEqual([['a']]);
  });

  it('moves the next block to a new page instead of splitting it', () => {
    expect(calculatePageBreaks([
      { id: 'a', height: 180 },
      { id: 'b', height: 160 },
    ], 297)).toEqual([['a'], ['b']]);
  });
});

import { A4_CSS_HEIGHT_PX, A4_CSS_WIDTH_PX, A4_EXPORT_HEIGHT_PX, A4_EXPORT_WIDTH_PX } from '@/lib/pdf';

describe('A4 export dimensions', () => {
  it('uses exact A4 CSS and 300-DPI raster dimensions', () => {
    expect(A4_CSS_WIDTH_PX).toBe(794);
    expect(A4_CSS_HEIGHT_PX).toBe(1123);
    expect(A4_EXPORT_WIDTH_PX).toBe(2480);
    expect(A4_EXPORT_HEIGHT_PX).toBe(3508);
  });
});
