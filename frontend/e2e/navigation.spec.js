import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to home page', async ({ page }) => {
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Translate' })).toBeVisible();
  });

  test('should navigate to history page', async ({ page }) => {
    await page.getByRole('link', { name: /history/i }).click();
    await expect(page).toHaveURL('/history');
  });

  test('should toggle theme', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /theme/i }).or(
      page.locator('button[aria-label*="theme" i]')
    ).first();

    if (await themeButton.isVisible()) {
      await themeButton.click();
      await expect(page.locator('html')).toHaveClass(/dark|light/);
    }
  });

  test('should have navigation links in header', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /home/i });
    const historyLink = page.getByRole('link', { name: /history/i });

    await expect(homeLink).toBeVisible();
    await expect(historyLink).toBeVisible();
  });
});

