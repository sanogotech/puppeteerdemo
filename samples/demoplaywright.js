//const puppeteer = require('puppeteer');
const { chromium } = require('playwright');

(async () => {
	
	
	const browser = await chromium.launch()
	const page = await browser.newPage()
	await page.goto('https://monelec.ci/home')

	await page.setViewportSize({ width: 1536, height: 754 })

	await page.waitForSelector('ng-component > .search-container > .search-zone > .yel-input-group > .mat-autocomplete-trigger')
	await page.click('ng-component > .search-container > .search-zone > .yel-input-group > .mat-autocomplete-trigger')

	await page.waitForSelector('#cdk-overlay-0 > #mat-autocomplete-0 > #mat-option-22 > .mat-option-text > .quartier-result')
	await page.click('#cdk-overlay-0 > #mat-autocomplete-0 > #mat-option-22 > .mat-option-text > .quartier-result')

	await browser.close()
	
})();