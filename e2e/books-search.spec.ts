import { test, expect } from '@playwright/test';

test('finds and returns books with a valid search input', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByTestId('book')).toHaveCount(0);

  await page.getByPlaceholder('Search for a book...').fill('Harry Potter');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await expect(page.getByTestId('book')).not.toHaveCount(0);
});

test('returns no books and shows empty state with an invalid search input', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByTestId('book')).toHaveCount(0);

  await page.getByPlaceholder('Search for a book...').fill('sadsadafafafafsafsafaf');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await expect(page.getByTestId('book')).toHaveCount(0);
  await expect(page.getByTestId('empty-books')).toBeVisible();
});
