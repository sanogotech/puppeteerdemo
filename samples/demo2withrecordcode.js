const puppeteer = require('puppeteer');

(async () => {
	
	const puppeteer = require('puppeteer');
	//const browser = await puppeteer.launch()
	const browser = await puppeteer.launch({ headless: false }); // default is true
	const page = await browser.newPage()
	const navigationPromise = page.waitForNavigation()

	await page.goto('https://fr.yahoo.com/')
	
	// pagewaitfornavigationoptions
	//await page.goto(url, { waitUntil: 'load' });
	//await page.goto(url, { waitUntil: 'domcontentloaded' });
	//await page.goto(url, { waitUntil: 'networkidle0' });
	//await page.goto(url, { waitUntil: 'networkidle2' });

	await page.setViewport({ width: 1536, height: 754 })

	await navigationPromise

	await page.waitForSelector('#ybar-sbq')
	await page.click('#ybar-sbq')

	await navigationPromise

	await page.waitForSelector('#yui_3_10_0_1_1627991509198_48')
	await page.click('#yui_3_10_0_1_1627991509198_48')

	await navigationPromise

	await navigationPromise

	await browser.close()
	
	
	
	
})();