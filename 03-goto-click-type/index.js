const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const response = await page.goto("https://duckduckgo.com/", {
    waitUntil: "networkidle2",
  });

  //   await page.screenshot({ path: "example.png" });
  //   console.log(await response.text());
  await page.type("#search_form_input_homepage", "duckduckgo");
  await page.click("#search_button_homepage");
  await page.waitForSelector(".result__a");

  // click a element in different way

  // execute code inside node script - handle execution-01

  //   await page.click(".result__a");

  // execute code inside the browser - handle execution-02

  //   await page.evaluate(() => {
  //     document.querySelector(".result__a").click();
  //   });

  // execute code inside node script - handle execution-03
  await page.$eval(".result__a", (element) => element.click());

  //   await browser.close();
})();
