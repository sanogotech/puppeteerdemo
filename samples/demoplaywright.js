const { chromium } = require('playwright');

(async () => {
	
	// Make sure to run headed.
    const browser = await chromium.launch({ headless: false });
	//const browser = await chromium.launch()
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
  //expect(page.url()).toBe('https://fr.wikipedia.org/wiki/Sanogo');
  //page.goto('https://fr.wikipedia.org/wiki/Sanogo');
  
  await page.goto('https://fr.wikipedia.org/wiki/Sanogo', { waitUntil: 'load' });
  // Click text=Amadou Haya Sanogo
  await page.click('text=Amadou Haya Sanogo');
  //expect(page.url()).toBe('https://fr.wikipedia.org/wiki/Amadou_Haya_Sanogo');
  //page.goto('https://fr.wikipedia.org/wiki/Amadou_Haya_Sanogo');
  await page.goto('https://fr.wikipedia.org/wiki/Amadou_Haya_Sanogo', { waitUntil: 'load' });
  
  await browser.close()
	
})();