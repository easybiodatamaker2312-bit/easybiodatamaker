/**
 * Pure pagination core (no DOM access) so it can be unit tested.
 *
 * A "unit" is an atomic block (a label/value row, a heading, a photo, a short
 * paragraph). Units are never split across pages. A page owns every unit whose
 * top edge lies in [start, nextStart). The DOM layer re-flows each page after
 * hiding the units that belong elsewhere and reports the resulting height, so
 * the cut is chosen from real layout rather than from estimates.
 */
export interface Unit {
  /** Top edge in the original (unpaginated) layout, px from the template root. */
  top: number;
  /** Section titles must stay on the same page as the unit that follows them. */
  heading: boolean;
}

const EPS = 0.5;

/** Ascending, de-duplicated cut positions where starting a new page is allowed. */
export function candidateCuts(units: Unit[]): number[] {
  const forbidden: Array<[number, number]> = [];
  for (let i = 0; i < units.length - 1; i += 1) {
    if (units[i].heading) forbidden.push([units[i].top, units[i + 1].top]);
  }
  const cuts: number[] = [];
  for (const unit of units) {
    const c = unit.top;
    if (c <= EPS) continue; // a cut at the very top would create an empty first page
    // Widow control: never leave a page holding a single trailing block (e.g. only the template footer).
    if (units.filter((u) => u.top >= c - EPS).length < 2) continue;
    // (heading.top, next.top] would orphan the heading at the bottom of a page.
    if (forbidden.some(([from, to]) => c > from + EPS && c <= to + EPS)) continue;
    if (cuts.length && Math.abs(cuts[cuts.length - 1] - c) <= EPS) continue;
    cuts.push(c);
  }
  return cuts.sort((a, b) => a - b);
}

export interface PaginateInput {
  units: Unit[];
  /**
   * Required page height (px) if this window were rendered on its own:
   * reflowed content bottom + the bottom padding/footer reserve.
   * Must be monotonic: a larger window is never shorter.
   */
  measure: (lo: number, hi: number) => number;
  /** Maximum allowed required height (the page height). */
  limit: number;
  maxPages?: number;
}

export interface PaginateResult {
  /** starts[0] is -Infinity; starts[i] is the first unit top that belongs to page i. */
  starts: number[];
  /** Pages that could not be made to fit (single block taller than a page, etc.). */
  overflowPages: number[];
}

export function paginate({ units, measure, limit, maxPages = 12 }: PaginateInput): PaginateResult {
  const cuts = candidateCuts(units);
  const starts: number[] = [-Infinity];
  const overflowPages: number[] = [];

  while (starts.length < maxPages) {
    const lo = starts[starts.length - 1];
    if (measure(lo, Infinity) <= limit) break; // the remainder fits on the final page
    const pool = cuts.filter((c) => c > lo + EPS);
    if (!pool.length) { overflowPages.push(starts.length - 1); break; }

    // Largest cut whose window still fits (windows grow monotonically with the cut).
    let left = 0;
    let right = pool.length - 1;
    let best = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (measure(lo, pool[mid]) <= limit) { best = mid; left = mid + 1; } else { right = mid - 1; }
    }
    if (best < 0) { overflowPages.push(starts.length - 1); best = 0; } // force progress
    starts.push(pool[best]);
  }
  if (starts.length >= maxPages && measure(starts[starts.length - 1], Infinity) > limit) overflowPages.push(starts.length - 1);
  return { starts, overflowPages };
}

export type PagePlan =
  | { kind: 'single'; scale: number }
  | { kind: 'paginated' };

/**
 * Decide how a biodata of natural height `naturalHeight` is laid out on A4.
 * - fits: exported 1:1.
 * - 'one-page' mode: always scaled to one page (the user asked for it).
 * - 'auto' mode: scaled only if that keeps text >= minFitScale, otherwise paginated.
 */
export function choosePagePlan(opts: { naturalHeight: number; pageHeight: number; footerZone: number; mode: 'auto' | 'one-page'; minFitScale: number }): PagePlan {
  const { naturalHeight, pageHeight, footerZone, mode, minFitScale } = opts;
  if (naturalHeight <= pageHeight + EPS) return { kind: 'single', scale: 1 };
  const fit = (pageHeight - footerZone * 0.5) / naturalHeight;
  if (mode === 'one-page') return { kind: 'single', scale: Math.max(0.2, Math.min(1, fit)) };
  if (fit >= minFitScale) return { kind: 'single', scale: fit };
  return { kind: 'paginated' };
}
