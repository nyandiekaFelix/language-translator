import { expect, test } from '@playwright/test';

test.describe('Translation Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display translation interface', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Translate' })).toBeVisible();
    await expect(page.getByText('Translate text between languages using LLMs')).toBeVisible();
  });

  test('should have source and target language selectors', async ({ page }) => {
    const sourceSelector = page.getByLabel(/translate from/i).or(page.getByText(/translate from/i)).first();
    const targetSelector = page.getByLabel(/translate to/i).or(page.getByText(/translate to/i)).first();

    await expect(sourceSelector).toBeVisible();
    await expect(targetSelector).toBeVisible();
  });

  test('should have translate button disabled when no text entered', async ({ page }) => {
    const translateButton = page.getByRole('button', { name: /translate/i });
    await expect(translateButton).toBeDisabled();
  });

  test('should enable translate button when text is entered', async ({ page }) => {
    const sourceTextarea = page.locator('textarea').first();
    await sourceTextarea.fill('Hello world');

    const translateButton = page.getByRole('button', { name: /translate/i });
    await expect(translateButton).toBeEnabled();
  });

  test('should display placeholder in translation output area', async ({ page }) => {
    const translatedTextarea = page.getByPlaceholder(/translation will appear/i);
    await expect(translatedTextarea).toBeVisible();
  });

  test('should show character count when typing', async ({ page }) => {
    const sourceTextarea = page.locator('textarea').first();
    await sourceTextarea.fill('Test text');

    await expect(page.getByText(/\d+\/\d+/)).toBeVisible();
  });

  test('should allow swapping languages', async ({ page }) => {
    await page.getByRole('button', { name: /swap lang/i }).click();

    const sourceLang = page.locator('#source-lang-selector').first();
    const targetLang = page.locator('#target-lang-selector').first();

    await expect(sourceLang).toBeVisible();
    await expect(targetLang).toBeVisible();
  });
});

