const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://grokonez.com/
  await page.goto('https://grokonez.com/');

  // Click text=Spring Boot
  await page.click('text=Spring Boot');
  expect(page.url()).toBe('https://grokonez.com/spring-framework-tutorial/spring-boot');

  // Click [placeholder="Search Amazon"]
  await page.click('[placeholder="Search Amazon"]');

  // Fill [placeholder="Search Amazon"]
  await page.fill('[placeholder="Search Amazon"]', 'block');
  

});