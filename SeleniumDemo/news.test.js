const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});


afterAll(async () => {
    await driver.quit();
  });

test("sollte die neusten News scrapen", async () => {
  await driver.get("https://news.ycombinator.com/");
  const articles = await driver.findElements(By.css(".athing"));
  expect(articles.length).toBeGreaterThan(0);


  let allTitles = [];
  for (let article of articles) {
    let titleElement = await article.findElement(By.css(".titleline a"));
    let title = await titleElement.getText();
    let link = await titleElement.getAttribute("href");
    allTitles.push({title,link});
    fs.writeFileSync("news.json", JSON.stringify(allTitles, null, 2));
  }
});
