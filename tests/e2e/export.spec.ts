import { expect, test, type Page } from '@playwright/test';
import fs from 'node:fs';

/**
 * Export fidelity regression tests (Chromium). Run with:
 *   npx playwright test tests/e2e/export.spec.ts --project=desktop
 * Set E2E_BASE_URL to test an already running `next start`, PW_CHROMIUM_PATH for a local browser.
 */
const STANDARD = {
  fullName: 'Karan Shah', dateOfBirth: '1996-01-15', timeOfBirth: '08:30', placeOfBirth: 'Ahmedabad', height: '5\'10"', religion: 'Hindu', caste: 'Vaishnav Vania', gotra: 'Kashyap', manglik: 'No', bloodGroup: 'B+', complexion: 'Wheatish',
  fatherName: 'Rajesh Shah', fatherOccupation: 'Businessman', motherName: 'Nisha Shah', motherOccupation: 'Homemaker', brothers: '1', sisters: '1', familyType: 'Joint', familyStatus: 'Upper middle class', nativePlace: 'Surat',
  highestQualification: "Bachelor's Degree in Computer Engineering", college: 'Gujarat Technological University', occupation: 'Software Engineer', organization: 'Technology Company', annualIncome: '18 LPA', workLocation: 'Ahmedabad',
  aboutMe: 'I am a balanced, family-oriented person who values honesty and shared goals.', hobbies: 'Cricket, travel, reading', languages: 'Gujarati, Hindi, English', phone: '+91 98765 43210', email: 'karan@example.com', city: 'Ahmedabad', state: 'Gujarat', pinCode: '380015',
};
const SHORT = { fullName: 'Karan', dateOfBirth: '1996-01-15', placeOfBirth: 'Surat', height: '5\'8"', religion: 'Hindu', caste: 'Patel', fatherName: 'Ramesh', motherName: 'Sita', highestQualification: 'B.Com', occupation: 'Accountant' };

async function seed(page: Page, data: Record<string, string>, templateId: string) {
  const state = { state: { data, language: 'en', templateId, colorwayId: '', step: 1, photos: [], photoPageMode: 'single-per-page', optionalFields: {}, customFields: [], sectionOrder: ['basics', 'family', 'education', 'about', 'contact', 'photos'], fieldOrder: {}, contactVisible: true, auspiciousSymbol: 'none', updatedAt: Date.now() }, version: 0 };
  await page.addInitScript(([k, v]) => localStorage.setItem(k, v), ['easy-biodata-v3', JSON.stringify(state)] as [string, string]);
  await page.goto('/create');
  // The "resume your draft" dialog appears shortly after hydration; wait for it, then dismiss it.
  await page.getByRole('button', { name: /^Resume$/ }).click({ timeout: 5000 }).catch(() => undefined);
  await expect(page.getByRole('button', { name: /^Resume$/ })).toHaveCount(0);
  await expect(page.locator('#biodata-preview-live')).toBeVisible();
}

const pngSize = (buf: Buffer) => ({ w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) });

async function download(page: Page, name: RegExp, statusRe = /downloaded/) {
  const downloads: Awaited<ReturnType<Page['waitForEvent']>>[] = [];
  page.on('download', (d) => downloads.push(d));
  await page.getByRole('button', { name }).click();
  await expect(page.getByRole('status')).toContainText(statusRe, { timeout: 60_000 });
  await page.waitForTimeout(1200);
  return downloads as unknown as import('@playwright/test').Download[];
}

test.describe('export pipeline', () => {
  test('long biodata exports as readable A4 PNG pages (one file per page) at 2480 px width', async ({ page }) => {
    await seed(page, STANDARD, 'classic-ivory');
    const files = await download(page, /Download PNG/);
    expect(files.length).toBeGreaterThan(1);
    for (const file of files) {
      const buf = fs.readFileSync((await file.path())!);
      expect(buf.subarray(1, 4).toString()).toBe('PNG');
      const { w, h } = pngSize(buf);
      expect(w).toBe(2480);
      expect(Math.abs(h - 3508)).toBeLessThanOrEqual(2); // A4 aspect ratio preserved, never stretched
    }
    await expect(page.getByRole('status')).toContainText(/A4 pages/);
  });

  test('PDF is a valid A4 document whose page count matches the status message', async ({ page }) => {
    await seed(page, STANDARD, 'midnight-gold');
    const [pdf] = await download(page, /Download Premium PDF/);
    const text = fs.readFileSync((await pdf.path())!).toString('latin1');
    expect(text.startsWith('%PDF-')).toBe(true);
    const pages = (text.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    expect(pages).toBeGreaterThanOrEqual(2);
    const box = /\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/.exec(text);
    expect(box).not.toBeNull();
    expect(Number(box![1])).toBeCloseTo(595.28, 1); // A4 in points (jsPDF writes float noise, so compare numerically)
    expect(Number(box![2])).toBeCloseTo(841.89, 1);
    await expect(page.getByRole('status')).toContainText(`${pages} A4 pages`);
  });

  test('JPG export produces JPEG files', async ({ page }) => {
    await seed(page, SHORT, 'blue-ledger');
    const [jpg] = await download(page, /Download JPG/);
    const buf = fs.readFileSync((await jpg.path())!);
    expect(buf[0]).toBe(0xff); expect(buf[1]).toBe(0xd8);
    expect(jpg.suggestedFilename()).toMatch(/\.jpg$/);
  });

  test('buttons are disabled while exporting and restored afterwards', async ({ page }) => {
    await seed(page, SHORT, 'classic-ivory');
    const pdfButton = page.getByRole('button', { name: /Download Premium PDF|Generating PDF/ });
    await pdfButton.click();
    await expect(page.getByRole('button', { name: /Generating PDF/ })).toBeDisabled();
    await expect(page.getByRole('button', { name: /Download PNG/ })).toBeDisabled();
    await expect(page.getByRole('status')).toContainText(/downloaded/, { timeout: 60_000 });
    await expect(page.getByRole('button', { name: /Download Premium PDF/ })).toBeEnabled();
    await expect(page.locator('[data-export-stage]')).toHaveCount(0); // stage is unmounted after export
  });

  test('the export contains none of the site UI (stage holds only the biodata)', async ({ page }) => {
    await seed(page, SHORT, 'classic-ivory');
    await page.getByRole('button', { name: /Download PNG/ }).click();
    const html = await page.waitForFunction(() => document.querySelector('[data-export-stage]')?.innerHTML ?? null, null, { timeout: 15_000 }).then((h) => h.jsonValue() as Promise<string | null>).catch(() => null);
    if (html) { expect(html).not.toMatch(/<button|<nav|role="dialog"/); }
  });

  test('single-page export matches the browser-rendered preview (pixel comparison)', async ({ page }) => {
    await seed(page, SHORT, 'classic-ivory');
    await page.evaluate(() => { const w = document.querySelector<HTMLElement>('.builder-a4-scale'); if (w) w.style.transform = 'none'; const a = document.querySelector<HTMLElement>('.builder-a4-wrap'); if (a) { a.style.height = 'auto'; a.style.overflow = 'visible'; } });
    const native = await page.locator('#biodata-preview-live').screenshot();
    const [png] = await download(page, /Download PNG/);
    const exported = fs.readFileSync((await png.path())!);
    const result = await page.evaluate(async ([nativeB64, exportedB64]) => {
      const load = async (b64: string) => { const img = new Image(); img.src = `data:image/png;base64,${b64}`; await img.decode(); return img; };
      const [nat, exp] = await Promise.all([load(nativeB64), load(exportedB64)]);
      // Compare at CSS-pixel scale (794 px wide) over the same region: the page area above the footer.
      const W = 794, H = Math.min(nat.naturalHeight, 1070);
      const pixels = (img: HTMLImageElement) => {
        const c = document.createElement('canvas'); c.width = W; c.height = H;
        const g = c.getContext('2d')!; const k = img.naturalWidth / W;
        g.drawImage(img, 0, 0, W * k, H * k, 0, 0, W, H);
        return g.getImageData(0, 0, W, H).data;
      };
      const a = pixels(nat), b = pixels(exp);
      let sum = 0;
      for (let i = 0; i < a.length; i += 4) sum += (Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2])) / 3;
      return sum / (a.length / 4);
    }, [native.toString('base64'), exported.toString('base64')] as [string, string]);
    expect(result).toBeLessThan(6); // mean abs. channel difference (0-255); html2canvas-era output scored far higher
  });
});
