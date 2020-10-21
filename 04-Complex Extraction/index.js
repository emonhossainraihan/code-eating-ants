const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const response = await page.goto(
    "https://react-image-compressor.netlify.app/"
  );
  const responseText = await response.text();
  await fs.writeFileSync("data/non-rendered.html", responseText);
  // console.log(await responseText)

  // To get actual content
  const renderedContent = await page.content();
  await fs.writeFileSync("data/rendered.html", renderedContent);

  //   console.log({ renderedContent });
  const extractedData = await page.$eval("html", (e) => e.outerHTML);
  await fs.writeFileSync("data/extracted.html", extractedData);
  //   console.log({ extractedData });
  //   await page.screenshot({ path: "example.png" });
  await page.pdf({ path: "data/page.pdf" });

  // take a snapshot
  const cdp = await page.target().createCDPSession();
  const { data } = await cdp.send("Page.captureSnapshot", { format: "mhtml" });
  fs.writeFileSync("data/page-using-puppeteer.mhtml", data);

  await browser.close();
})();
