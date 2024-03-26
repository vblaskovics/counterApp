// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Counter Application/);
});

test('increase test', async ({ page }) => {
    await page.goto('/');
    const increase = page.getByTestId('increaseButton');
    const numberView = page.getByTestId('countNumber');
    const numberBeforeIncrease = numberView.innerText.toString();
    console.log(numberBeforeIncrease);
    await increase.click();
    await expect(numberView).toHaveText('37');
});

test('decrease test', async ({ page }) => {
  await page.goto('/');
  const increase = page.getByTestId('decreaseButton');
  const numberView = page.getByTestId('countNumber');
  const numberBeforeIncrease = numberView.innerText.toString();
  console.log(numberBeforeIncrease);
  await increase.click();
  await expect(numberView).toHaveText('37');
});