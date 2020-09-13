## click

```js
// click a element in different way

// execute code inside node script - handle execution-01

await page.click(".result__a"); // page.click(selector[, options])

// execute code inside the browser - handle execution-02

await page.evaluate(() => {
  document.querySelector(".result__a").click();
});

// execute code inside node script - handle execution-03
await page.$eval(".result__a", (element) => element.click());
```

## Promise.all

```js
await Promise.all([page.click(".result__a"), page.waitForNavigation()]);
```

## command-line vs browser-context

## manually add jQuery

```js
await page.addScriptTag({ url: "https://code.jquery.com/jquery-3.5.1.min.js" });
await page.addScriptTag({ path: require.resolve("jquery") });
```
