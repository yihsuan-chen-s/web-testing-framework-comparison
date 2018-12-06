const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');

(async function() {
  let driver;
  try {
    driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await driver.get('https://www.seleniumhq.org/');

    await driver.wait(function() {
        return driver.findElement(By.css('div#header a')).getText().then(function(text) {
            return text == 'Browser Automation';
            });
    }, 1000);

    } finally {
        await driver && driver.quit();
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));
