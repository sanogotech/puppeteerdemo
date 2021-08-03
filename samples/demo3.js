const puppeteer = require('puppeteer');

(async () => {
	
	//const puppeteer = require('puppeteer');
	//const browser = await puppeteer.launch()
	const browser = await puppeteer.launch({ headless: false }); // default is true
	const page = await browser.newPage()

	
	 // Configure the navigation timeout
    //await page.setDefaultNavigationTimeout(0);
	//https://stackoverflow.com/questions/52163547/node-js-puppeteer-how-to-set-navigation-timeout
	await page.setDefaultTimeout(300000);
	
	//await page.goto('https://monelec.ci/home', {waitUntil: 'load', timeout: 0});
	await page.goto('https://monelec.ci/home')

	await page.setViewport({ width: 1536, height: 754 })


	await page.waitForSelector('ng-component > .search-container > .search-zone > .yel-input-group > .mat-autocomplete-trigger')

	await page.click('ng-component > .search-container > .search-zone > .yel-input-group > .mat-autocomplete-trigger')
	

	await page.waitForSelector('#cdk-overlay-0 > #mat-autocomplete-0 > #mat-option-43 > .mat-option-text > .quartier-result')

	await page.click('#cdk-overlay-0 > #mat-autocomplete-0 > #mat-option-43 > .mat-option-text > .quartier-result')

	await browser.close()
	
	
})();