import type { Unit } from './paginate';
import { FOOTER_ZONE_PX } from './constants';

/** Blocks at or below this height are never split (rows, headings, short paragraphs). */
const ATOMIC_MAX_PX = 110;
/** `break-inside: avoid` blocks up to this height are kept together too. */
const AVOID_MAX_PX = 380;
const EPS = 0.5;

type Kind =
  | { type: 'skip' }
  | { type: 'decor' }
  | { type: 'unit'; top: number; bottom: number }
  | { type: 'container' };

export interface ExportUnit extends Unit { el: HTMLElement | SVGElement; bottom: number }

export interface DomPlan {
  root: HTMLElement;
  kinds: Map<Element, Kind>;
  units: ExportUnit[];
  /** Root height in the original layout (>= one page when pagination is needed). */
  naturalHeight: number;
  /** Space below the last block that every page keeps (template padding, footer zone). */
  bottomReserve: number;
}

const REPLACED = new Set(['img', 'svg', 'canvas', 'video', 'picture']);
const SKIPPED_TAGS = new Set(['script', 'style', 'link', 'noscript', 'template', 'meta']);

function hasContent(el: Element): boolean {
  if (REPLACED.has(el.localName)) return true;
  if ((el.textContent ?? '').trim().length > 0) return true;
  return el.querySelector('img,svg,canvas,video,picture') !== null;
}

function isHeadingLike(el: Element): boolean {
  if (/^h[1-6]$/.test(el.localName)) return true;
  // e.g. <div class="x-section-title"><span>01</span><h2>Family</h2></div>
  if (el.children.length <= 4 && el.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6')) {
    return (el.textContent ?? '').trim().length <= 80;
  }
  return false;
}

/** Walk the template and decide which blocks are decoration, atomic units, or containers. */
export function analyse(root: HTMLElement): DomPlan {
  const rootRect = root.getBoundingClientRect();
  const kinds = new Map<Element, Kind>();
  const units: ExportUnit[] = [];

  const walk = (parent: Element) => {
    for (const child of Array.from(parent.children)) {
      if (!(child instanceof HTMLElement) && !(child instanceof SVGElement)) continue;
      if (SKIPPED_TAGS.has(child.localName)) { kinds.set(child, { type: 'skip' }); continue; }
      const cs = getComputedStyle(child);
      if (cs.display === 'none' || cs.visibility === 'hidden') { kinds.set(child, { type: 'skip' }); continue; }
      if (cs.position === 'absolute' || cs.position === 'fixed') { kinds.set(child, { type: 'decor' }); continue; }
      const rect = child.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) { kinds.set(child, { type: 'skip' }); continue; }
      const top = rect.top - rootRect.top;
      const bottom = rect.bottom - rootRect.top;
      const content = hasContent(child);
      const atomic = !content
        || REPLACED.has(child.localName)
        || child.children.length === 0
        || rect.height <= ATOMIC_MAX_PX
        || (cs.breakInside === 'avoid' && rect.height <= AVOID_MAX_PX);
      if (atomic) {
        kinds.set(child, { type: 'unit', top, bottom });
        units.push({ el: child, top, bottom, heading: content && isHeadingLike(child) });
      } else {
        kinds.set(child, { type: 'container' });
        walk(child);
      }
    }
  };
  walk(root);

  const lastBottom = units.reduce((max, u) => Math.max(max, u.bottom), 0);
  const naturalHeight = rootRect.height;
  const bottomReserve = Math.max(naturalHeight - lastBottom, FOOTER_ZONE_PX);
  return { root, kinds, units, naturalHeight, bottomReserve };
}

/**
 * Hide every unit whose top is outside [lo, hi) and every container left empty,
 * so the template re-flows inside its own frame/background. Returns a restore function.
 */
export function applyWindow(plan: DomPlan, lo: number, hi: number): () => void {
  const touched: Array<{ el: HTMLElement | SVGElement; style: string | null }> = [];
  const hide = (el: Element) => {
    const target = el as HTMLElement;
    touched.push({ el: target, style: target.getAttribute('style') });
    const parent = target.parentElement;
    const inGrid = parent ? /grid/.test(getComputedStyle(parent).display) : false;
    if (inGrid) {
      // display:none would make the grid auto-place later siblings into this cell
      // (e.g. a section's content collapsing into its 13mm number column). Keep the cell, drop the content.
      target.setAttribute('data-export-hidden', '');
      target.style.cssText += ';visibility:hidden!important;height:0!important;min-height:0!important;max-height:0!important;margin:0!important;padding:0!important;border:0!important;overflow:hidden!important;';
    } else {
      target.style.setProperty('display', 'none', 'important');
    }
  };
  const visit = (parent: Element): boolean => {
    let any = false;
    for (const child of Array.from(parent.children)) {
      const kind = plan.kinds.get(child);
      if (!kind || kind.type === 'decor' || kind.type === 'skip') continue;
      if (kind.type === 'unit') {
        if (kind.top >= lo - EPS && kind.top < hi - EPS) any = true; else hide(child);
      } else if (visit(child)) {
        any = true;
      } else {
        hide(child);
      }
    }
    return any;
  };
  visit(plan.root);
  return () => {
    for (let i = touched.length - 1; i >= 0; i -= 1) {
      const { el, style } = touched[i];
      el.removeAttribute('data-export-hidden');
      if (style === null) el.removeAttribute('style'); else el.setAttribute('style', style);
    }
  };
}

/** Height this window would need on its own page (content after re-flow + bottom reserve). */
export function measureWindow(plan: DomPlan, lo: number, hi: number): number {
  const restore = applyWindow(plan, lo, hi);
  try {
    const rootTop = plan.root.getBoundingClientRect().top;
    let bottom = 0;
    for (const unit of plan.units) {
      const rect = unit.el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue; // display:none (or inside one)
      if ((unit.el as Element).closest('[data-export-hidden]')) continue; // collapsed grid cell
      bottom = Math.max(bottom, rect.bottom - rootTop);
    }
    return bottom + plan.bottomReserve;
  } finally {
    restore();
  }
}
