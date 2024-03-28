// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Counter Application/);
});

test('increase test', async ({ page }) => {
    await page.goto('/');
    const increase = page.getByTestId('increaseButton');
    await increase.click();
    const numberView = page.getByTestId('countNumber');
    await page.waitForTimeout(3000);
    const numberBeforeIncrease = (await numberView.innerHTML()).toString();
    console.log(numberBeforeIncrease);
    await increase.click();
    await page.waitForTimeout(3000);
    const numberAfterIncrease = parseInt(numberBeforeIncrease) + 1;
    await expect(numberView).toHaveText(numberAfterIncrease.toString());
});

test('decrease test', async ({ page }) => {
  await page.goto('/');
  const increase = page.getByTestId('decreaseButton');
  await increase.click();
  const numberView = page.getByTestId('countNumber');
  await page.waitForTimeout(3000);
  const numberBeforeDecrease = (await numberView.innerHTML()).toString();
  console.log(numberBeforeDecrease);
  await increase.click();
  await page.waitForTimeout(3000);
  const numberAfterDecrease = parseInt(numberBeforeDecrease) - 1;
  await expect(numberView).toHaveText(numberAfterDecrease.toString());
});