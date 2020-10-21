## Try to extract title and comment for `https://news.ycombinator.com/`

```js
[...document.querySelectorAll(".storylink ,.subtext a+ a")].map(
  (e) => e.innerText
);

//version-01
var data = {
  title: [...document.querySelectorAll(".storylink")].map((e) => e.innerText),
  comments: [...document.querySelectorAll(".subtext a+ a")].map(
    (e) => e.innerText
  ),
};

console.table(data);

//version-02 with => indexing error
var data = {};

for (let [index, title] of [...document.querySelectorAll(".storylink")]
  .map((e) => e.innerText)
  .entries()) {
  data[index] = { title };
}

for (let comment of [...document.querySelectorAll(".subtext a+ a")].map(
  (e) => e.innerText
)) {
  data[index]["comment"] = { comment };
}

console.table(data);

//version-03
// document.querySelector('.athing').querySelector('.storylink').innerText
// document.querySelector('.athing').nextElementSibling.querySelector('.subtext a+ a').innerText
// document.querySelector('.athing').remove()

const data = [];

for (let element of [...document.querySelectorAll(".athing")]) {
  const title = element.querySelector(".storylink").innerText;
  const commentElement = element.nextElementSibling.querySelector(
    ".subtext a+ a"
  );
  const comment = commentElement && commentElement.innerText;
  data.push({ title, comment });
  element.nextElementSibling.remove();
  element.remove();
}
```

## Task

- (write code) - Run chrome headless with puppeteer.connect
- (write code) - Search on a random website and take screenshots of result page
- (refactor) - Change the github structure for the previous assignment to a better numbered, file/folder structure
- (write code) - Try to extract title and comment and show in a table, without using the element removal.
- (write code) - Extract html, mhtml, pdf, full page screenshot.
- (show screenshot) - Convert mhtml to html and show in the browser.

## important packages

- `npm i serve`
- `npm i mhtml2html`
