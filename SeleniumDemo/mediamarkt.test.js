const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs")

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });
  

  test("Preis und Titel vom Playstation 5 von Mediamarkt", async () => {

    await driver.get("https://www.mediamarkt.de/")
    const akzeptierenButton = await driver.findElement(By.xpath('//*[@id="pwa-consent-layer-accept-all-button"]/span'))
    await akzeptierenButton.click()

    const suchFeld = await driver.findElement(By.id("search-form"))
    await suchFeld.sendKeys("Playstation 5")

    const suchButton = await driver.findElement(By.xpath('//*[@id="storybook-form-1"]/div/div/div[1]/button'))
    await suchButton.click()

    await driver.wait(until.elementLocated(By.xpath('//*[@id="main-content"]/div[1]/div[1]/div[2]/div/div[3]/div[1]/div/div/div/a/div/p')),10000)
    const title = await driver.findElement(By.xpath('//*[@id="main-content"]/div[1]/div[1]/div[2]/div/div[3]/div[1]/div/div/div/a/div/p')).getText()
    const price = await driver.findElement(By.xpath('//*[@id="main-content"]/div[1]/div[1]/div[2]/div/div[3]/div[1]/div/div/div/div[4]/div/div/div[2]/span[1]')).getText()
    
    let ps5Liste = []
    ps5Liste.push({title,price})
    fs.writeFileSync("mediamarkt.json", JSON.stringify(ps5Liste, null, 2))
    
    expect(title).toBe("SONY PlayStation®5 (Modellgruppe: Slim)")
    expect(price).toBe("444,– €")
  }, 30000)

  