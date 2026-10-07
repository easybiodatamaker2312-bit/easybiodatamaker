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
