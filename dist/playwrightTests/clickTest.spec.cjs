var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-check
const { test, expect } = require("@playwright/test");
const { parse } = require("path");
test('has title', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('/');
    yield expect(page).toHaveTitle(/Counter Application/);
}));
test("increase test", (_b) => __awaiter(void 0, [_b], void 0, function* ({ page }) {
    yield page.goto("/");
    yield page.waitForLoadState('domcontentloaded');
    const numberDiv = page.getByTestId("countNumber");
    yield numberDiv.waitFor({ state: 'visible' });
    const number = yield numberDiv.innerText();
    yield page.getByTestId("increaseButton").click();
    yield page.waitForTimeout(500);
    const increasedNumberOnPage = yield numberDiv.innerText();
    const increasedNumber = parseInt(number) + 1;
    yield expect(increasedNumberOnPage).toEqual(increasedNumber.toString());
}));
test('decrease test', (_c) => __awaiter(void 0, [_c], void 0, function* ({ page }) {
    yield page.goto("/");
    yield page.waitForLoadState('domcontentloaded');
    const numberDiv = page.getByTestId("countNumber");
    yield numberDiv.waitFor({ state: 'visible' });
    const number = yield numberDiv.innerText();
    yield page.getByTestId("decreaseButton").click();
    yield page.waitForTimeout(500);
    const decreasedNumberOnPage = yield numberDiv.innerText();
    const decreasedNumber = parseInt(number) - 1;
    yield expect(decreasedNumberOnPage).toEqual(decreasedNumber.toString());
}));
export {};
