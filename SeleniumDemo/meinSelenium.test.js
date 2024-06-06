const { Builder, By, until } = require("selenium-webdriver");
let driver;

// beforeAll(async () => {

//     driver = await new Builder().forBrowser("chrome").build();
// })

test.skip("ob der Titel korrekt angezeigt wird", async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3004");
  const title = await driver.getTitle();

  expect(title).toBe("React App");

  const button = await driver.findElement(By.tagName("button"));
  const checkboxElement = await driver.findElement(By.id("checkbox"));

  const oldClass = await button.getAttribute("class");
  expect(oldClass).toBe("rot");

  button.click();
  checkboxElement.click();

  const newClass = await button.getAttribute("class");

  expect(newClass).toBe("grau");

  await driver.quit();

  //Mit diesem Code würde der Browser nach 3 Sekunden erst geschlossen werden
  //   setTimeout(async () => {
  //     await driver.quit()
  //   },3000)
});

test.skip("ob der Titel korrekt angezeigt wird", async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3003");

  const inputName = await driver.findElement(By.id("inputName"));
  const inputEmail = await driver.findElement(By.id("inputEmail"));
  const sendButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div/form/button')
  );

//   await inputName.sendKeys("Sabine Müller");
//   await inputEmail.sendKeys("sabine@sabine.de");
//   await sendButton.click();

  await inputName.sendKeys("Suheib Marzouka");
  await inputEmail.sendKeys("suheib@suheib.de");
  await sendButton.click();

//   await inputName.sendKeys("Max Mustermann");
//   await inputEmail.sendKeys("max@max.de");
//   await sendButton.click();
 

  // Testet anschließend mit Jest, ob die neuen Daten in der Tabelle wie erwartet vorhanden sind
  // und die korrekten Werte haben.


  // Beispiel wie man es anders machen könnte

// const elements = await driver.findElements(By.tagName("td"))

// let gefunden = false
// for (let td of elements){
//     if(await td.getText() == "Sabine Müller"){
//         gefunden=true
//     }
// }

// expect(gefunden).toBe(true)
 // Beispiel Ende



  const nameField = await driver.findElement(By.xpath('//*[@id="root"]/table/tbody/tr/td[1]'))
  const emailField = await driver.findElement(By.xpath('//*[@id="root"]/table/tbody/tr/td[2]'))


  expect(await nameField.getText()).toBe("Suheib Marzouka")
  expect(await emailField.getText()).toBe("suheib@suheib.de")

//   setTimeout(async () => {
//     await driver.quit();
//   }, 3000);
});
