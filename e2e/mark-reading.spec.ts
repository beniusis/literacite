import { test, expect } from '@playwright/test';

test('submit pages read form', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByTestId('progress-result')).toHaveText('0 / 1');

  await page.getByTestId('mark-reading-btn').click();
  await expect(page.getByTestId('pages-read-input')).toHaveValue('1');

  await page.getByTestId('pages-read-input').fill('15');
  await expect(page.getByTestId('pages-read-input')).toHaveValue('15');

  await page.getByTestId('submit-pages-read-btn').click();
  await expect(page.getByTestId('progress-result')).toHaveText('15 / 1');

  await page.getByTestId('mark-reading-btn').click();
  await expect(page.getByTestId('submit-pages-read-btn')).toBeDisabled();
});
