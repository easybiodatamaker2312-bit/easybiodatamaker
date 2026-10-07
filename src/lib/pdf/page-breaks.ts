export interface PageBlock {
  id: string;
  height: number;
}

/** Greedy A4 page-break planner. A block is never split across pages. */
export function calculatePageBreaks(blocks: PageBlock[], pageHeight: number): string[][] {
  if (pageHeight <= 0) throw new Error('pageHeight must be greater than zero');
  const pages: string[][] = [[]];
  let remaining = pageHeight;
  for (const block of blocks) {
    if (block.height <= 0) continue;
    if (pages[pages.length - 1].length > 0 && block.height > remaining) {
      pages.push([]);
      remaining = pageHeight;
    }
    pages[pages.length - 1].push(block.id);
    remaining = Math.max(0, remaining - block.height);
  }
  return pages.filter((page) => page.length > 0);
}
