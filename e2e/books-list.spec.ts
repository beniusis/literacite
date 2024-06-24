import { test, expect } from '@playwright/test';

test("adds the book to the user's list", async ({ page }) => {
  await page.goto('./');
  await page.getByPlaceholder('Search for a book...').fill('Harry Potter');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await page.getByTestId('book').first().click();
  await page.getByTestId('add-to-list-btn').click();
  await page.getByTestId('filter-btn').click();
  await page.getByTestId('filter-by-all').click();
  await expect(page.getByTestId('book')).toHaveCount(1);
});
