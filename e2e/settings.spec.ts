import { test, expect } from '@playwright/test';

test('change pages per day to read setting', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByTestId('progress-result')).toHaveText('0 / 1');

  await page.getByTestId('settings-btn').click();
  await expect(page.getByTestId('pages-input')).toHaveValue('1');
  await expect(page.getByTestId('settings-save-btn')).toBeDisabled();

  await page.getByTestId('pages-input').fill('10');
  await expect(page.getByTestId('pages-input')).toHaveValue('10');

  await page.getByTestId('settings-increment-btn').click();
  await expect(page.getByTestId('pages-input')).toHaveValue('11');

  await page.getByTestId('settings-save-btn').click();
  await expect(page.getByTestId('progress-result')).toHaveText('0 / 11');
});
