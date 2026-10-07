import { test, expect } from '@playwright/test';

test('mobile builder opens and preserves draft', async ({ page }) => {
  await page.goto('/create');
  await expect(page.getByText('Personal Details')).toBeVisible();
  const name = page.getByLabel(/full name/i);
  await name.fill('Aarav Shah');
  await page.getByRole('button', { name: /next/i }).click();
  await expect(page.getByText('Family')).toBeVisible();
  await page.reload();
  await expect(page.getByDisplayValue('Aarav Shah')).toBeVisible();
});

test('desktop builder exposes live preview', async ({ page }) => {
  await page.goto('/create');
  await expect(page.getByText(/live preview/i)).toBeVisible();
  await expect(page.locator('[data-testid="biodata-preview-container"]')).toBeVisible();
});

test('390px mobile export controls fit without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/create');
  await expect(page.getByText('Personal Details')).toBeVisible();
  await expect(page.getByRole('button', { name: /save as pdf/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /download word/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /share \/ whatsapp/i })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  expect(overflow).toBe(false);
});
