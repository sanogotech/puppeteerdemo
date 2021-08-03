const puppeteer = require('puppeteer');

(async () => {
  // 1. create  Browser
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false }); // default is true
  
  // 2. create Page
  const page = await browser.newPage();
  
   // Configure the navigation timeout
    //await page.setDefaultNavigationTimeout(0);
	//https://stackoverflow.com/questions/52163547/node-js-puppeteer-how-to-set-navigation-timeout
	await page.setDefaultTimeout(300000);
  
 // Puppeteer sets an initial page size to 800×600px, which defines the screenshot size. 
 // The page size can be customized
   await page.setViewport({
	  width: 640,
	  height: 480,
	  deviceScaleFactor: 1,
	  isMobile: false,
	  hasTouch: false,
	  isLandscape: false,
   });
   
   
  

  // open page
  await page.goto('https://www.google.fr');
  
  /*
  await page.goto('https://ourcodeworld.com', {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0
  }); */
  
   // pagewaitfornavigationoptions
	//await page.goto(url, { waitUntil: 'load' });
	//await page.goto(url, { waitUntil: 'domcontentloaded' });
	//await page.goto(url, { waitUntil: 'networkidle0' });
	//await page.goto(url, { waitUntil: 'networkidle2' });
  
  // screeshot
  await page.screenshot({ path: 'googlefr.png' });
  
  //create a PDF
  

  await browser.close();
})();