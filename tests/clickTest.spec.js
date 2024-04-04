// @ts-check
const { test, expect } = require("@playwright/test");
const { parse } = require("path");

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Counter Application/);
});

test("increase test", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState('domcontentloaded');
  const numberDiv = page.getByTestId("countNumber");
  await numberDiv.waitFor({state: 'visible'});
  const number = await numberDiv.innerText();
  await page.getByTestId("increaseButton").click();
  await page.waitForTimeout(500);
  const increasedNumberOnPage = await numberDiv.innerText();
  const increasedNumber = parseInt(number) + 1;
  await expect(increasedNumberOnPage).toEqual(increasedNumber.toString());
});

test('decrease test', async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState('domcontentloaded');
  const numberDiv = page.getByTestId("countNumber");
  await numberDiv.waitFor({state: 'visible'});
  const number = await numberDiv.innerText();
  await page.getByTestId("decreaseButton").click();
  await page.waitForTimeout(500);
  const decreasedNumberOnPage = await numberDiv.innerText();
  const decreasedNumber = parseInt(number) - 1;
  await expect(decreasedNumberOnPage).toEqual(decreasedNumber.toString());
});