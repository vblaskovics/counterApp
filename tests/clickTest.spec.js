// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://counterapp-7u2m.onrender.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Counter Application/);
});

test('get started link', async ({ page }) => {
    const increase = page.getByTestId('increaseButton');
    await increase.click();
    const numberView = page.getByTestId('countNumber');
    const number = parseInt(numberView.innerHTML.toString());
    await expect(numberView).toContainText((number + 1).toString());
});