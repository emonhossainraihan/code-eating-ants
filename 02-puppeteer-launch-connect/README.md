## puppeteer.launch()

`puppeteer.launch()` starts the chromium instance and connects to it afterwards. The start of a chromium instance takes between 100 and 150ms depending on your hardware. The connect happens instantly (as it is a websocket on a local machine).

## puppeteer.connect()

`puppeteer.connect()` only connects to an existing chromium instance.

`"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --remote-debugging-port=9222`

`http://localhost:9222/json/version`
