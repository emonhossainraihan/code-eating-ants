const puppeteer = require("puppeteer");

(async () => {
  let browser = await puppeteer.launch({ headless: false });
  const browserWSEndpoint = browser.wsEndpoint();

  browser.disconnect();

  browser = await puppeteer.connect({
    browserWSEndpoint,
  });

  //browser.disconnect();
})();
