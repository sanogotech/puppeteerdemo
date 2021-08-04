//const { test, expect } = require('@playwright/test');

//const { chromium } = require('playwright');

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  // Click input[name="search"]
  await page.click('input[name="search"]');
  // Press CapsLock
  await page.press('input[name="search"]', 'CapsLock');
  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'sanogo');
  // Press Enter
  await page.press('input[name="search"]', 'Enter');
  expect(page.url()).toBe('https://fr.wikipedia.org/wiki/Sanogo');
  // Click text=Amadou Haya Sanogo
  await page.click('text=Amadou Haya Sanogo');
  expect(page.url()).toBe('https://fr.wikipedia.org/wiki/Amadou_Haya_Sanogo');
  
  
})();