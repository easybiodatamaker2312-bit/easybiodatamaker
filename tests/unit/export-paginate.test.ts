import { describe, expect, it } from 'vitest';
import { candidateCuts, choosePagePlan, paginate, type Unit } from '@/lib/export/paginate';

const rows = (n: number, height = 30, start = 0): Unit[] => Array.from({ length: n }, (_, i) => ({ top: start + i * height, heading: false }));

/** Fake layout: a window's required height = (units inside) * rowHeight + reserve. */
const fakeMeasure = (units: Unit[], rowHeight: number, reserve: number) => (lo: number, hi: number) =>
  units.filter((u) => u.top >= lo - 0.5 && u.top < hi - 0.5).length * rowHeight + reserve;

describe('candidateCuts', () => {
  it('never offers a cut at the very top and de-duplicates equal tops', () => {
    const cuts = candidateCuts([{ top: 0, heading: false }, { top: 30, heading: false }, { top: 30, heading: false }, { top: 60, heading: false }]);
    expect(cuts).toEqual([30]); // 60 would leave a single trailing block alone
  });

  it('never leaves a lone trailing block (widow) on its own page', () => {
    const units: Unit[] = [{ top: 0, heading: false }, { top: 100, heading: false }, { top: 200, heading: false }, { top: 300, heading: false }];
    expect(candidateCuts(units)).toEqual([100, 200]); // 300 would leave only the last unit alone
  });

  it('does not allow a page to end on a section heading (no orphaned titles)', () => {
    const units: Unit[] = [
      { top: 0, heading: false },
      { top: 100, heading: true },   // heading
      { top: 130, heading: false },  // first row of that section
      { top: 160, heading: false },
    ];
    expect(candidateCuts(units)).toEqual([100]); // 130 would orphan the heading; 160 would leave a lone last block
  });
});

describe('paginate', () => {
  it('keeps content that fits on a single page', () => {
    const units = rows(10);
    expect(paginate({ units, limit: 400, measure: fakeMeasure(units, 30, 40) }).starts).toEqual([-Infinity]);
  });

  it('splits long content into pages that each fit the limit and never split a unit', () => {
    const units = rows(40);
    const measure = fakeMeasure(units, 30, 40);
    const { starts, overflowPages } = paginate({ units, limit: 400, measure });
    expect(overflowPages).toEqual([]);
    expect(starts.length).toBe(4); // 12 rows per page max -> ceil(40/12)
    starts.forEach((lo, i) => expect(measure(lo, starts[i + 1] ?? Infinity)).toBeLessThanOrEqual(400));
    // every unit belongs to exactly one page
    const owned = units.map((u) => starts.filter((s, i) => u.top >= s - 0.5 && u.top < (starts[i + 1] ?? Infinity) - 0.5).length);
    expect(owned.every((n) => n === 1)).toBe(true);
  });

  it('always makes progress and reports a block that cannot fit', () => {
    const units: Unit[] = [{ top: 0, heading: false }, { top: 500, heading: false }, { top: 1000, heading: false }];
    const { starts, overflowPages } = paginate({ units, limit: 300, measure: (lo, hi) => units.filter((u) => u.top >= lo && u.top < hi).length * 400 });
    expect(starts.length).toBeGreaterThan(1);
    expect(overflowPages.length).toBeGreaterThan(0);
  });

  it('respects maxPages', () => {
    const units = rows(200);
    expect(paginate({ units, limit: 200, maxPages: 5, measure: fakeMeasure(units, 30, 20) }).starts.length).toBeLessThanOrEqual(5);
  });
});

describe('choosePagePlan', () => {
  const base = { pageHeight: 1123, footerZone: 44, minFitScale: 0.88 };
  it('exports 1:1 when the design fits', () => {
    expect(choosePagePlan({ ...base, naturalHeight: 1123, mode: 'auto' })).toEqual({ kind: 'single', scale: 1 });
  });
  it('shrinks slightly (>= 88%) rather than starting a nearly empty second page', () => {
    const plan = choosePagePlan({ ...base, naturalHeight: 1200, mode: 'auto' });
    expect(plan.kind).toBe('single');
    if (plan.kind === 'single') expect(plan.scale).toBeGreaterThanOrEqual(0.88);
  });
  it('paginates instead of shrinking text to an unreadable size', () => {
    expect(choosePagePlan({ ...base, naturalHeight: 1898, mode: 'auto' })).toEqual({ kind: 'paginated' });
  });
  it('honours an explicit one-page request even when it needs heavy scaling', () => {
    const plan = choosePagePlan({ ...base, naturalHeight: 1898, mode: 'one-page' });
    expect(plan.kind).toBe('single');
    if (plan.kind === 'single') { expect(plan.scale).toBeLessThan(0.6); expect(plan.scale).toBeGreaterThan(0.5); }
  });
});
