const { Builder, By, until } = require("selenium-webdriver");
let driver;

// beforeAll(async () => {

//     driver = await new Builder().forBrowser("chrome").build();
// })

test("ob der Titel korrekt angezeigt wird", async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3004");
  const title = await driver.getTitle();

  expect(title).toBe("React App");

    const button = await driver.findElement(By.tagName("button"))
    const checkboxElement = await driver.findElement(By.id("checkbox"))

    const oldClass = await button.getAttribute("class")
    expect(oldClass).toBe("rot")

    button.click()
    checkboxElement.click()

    const newClass = await button.getAttribute("class")

    expect(newClass).toBe("grau")



  

  await driver.quit();

  //Mit diesem Code würde der Browser nach 3 Sekunden erst geschlossen werden
  //   setTimeout(async () => {
  //     await driver.quit()
  //   },3000)
});
