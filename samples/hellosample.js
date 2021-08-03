const puppeteer = require('puppeteer');



(async () => {
	
	//const browser = await puppeteer.launch()
	const browser = await puppeteer.launch({ headless: false }); // default is true
	const page = await browser.newPage()
	const navigationPromise = page.waitForNavigation()

	await page.goto('https://www.macieenligne.ci/')

	await page.setViewport({ width: 1536, height: 754 })

	await page.waitForSelector('.section-top-0 > .shell > .row > .col-sm-6:nth-child(2) > .infos')
	await page.click('.section-top-0 > .shell > .row > .col-sm-6:nth-child(2) > .infos')

	await navigationPromise

	await page.waitForSelector('.col-md-12 > .divBank > .linkInfo > .row > .col-md-8 > h4')
	await page.click('.col-md-12 > .divBank > .linkInfo > .row > .col-md-8 > h4')

	
	
	
})();