import { test, expect } from '@playwright/test';

test('changes status of the book', async ({ page }) => {
  await page.goto('./');
  await page.getByPlaceholder('Search for a book...').fill('Harry Potter');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await page.getByTestId('book').first().click();
  await page.getByTestId('add-to-list-btn').click();
  await page.getByTestId('filter-btn').click();
  await page.getByTestId('filter-by-all').click();
  await page.getByTestId('book').first().click();

  await page.getByTestId('to-read-btn').click();
  await page.getByTestId('book-save-btn').click();
  await page.getByTestId('filter-btn').click();
  await page.getByTestId('filter-by-to-read').click();
  await expect(page.getByTestId('book')).toHaveCount(1);
});
