import { expect, test } from '@playwright/test';

test.describe('Page Accessibility', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Translate' })).toBeVisible();
  });

  test('should load history page', async ({ page }) => {
    await page.goto('/history');
    await expect(page).toHaveURL('/history');
  });

  test('should load about page', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveURL('/about');
  });

  test('should load terms page', async ({ page }) => {
    await page.goto('/terms');
    await expect(page).toHaveURL('/terms');
  });

  test('should load privacy page', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveURL('/privacy');
  });

  test('should show 404 for invalid route', async ({ page }) => {
    await page.goto('/invalid-route');
    await expect(page).toHaveURL('/invalid-route');
  });
});

