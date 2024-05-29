// const { plus, mal, geteilt, minus, randomNumber } = require("./calculator");
import { plus, mal, geteilt, minus, randomNumber } from "./calculator";

test("Mal Funktion (5*6)", () => {
  const ergebnis = mal(5, 6);
  expect(ergebnis).toBe(30);
});

it("Mal Funktion (5*6)", () => {
  expect(mal(5, 6)).toBe(30);
});

describe("Plus funktion", ()=>{
    test("plus funktion 1+1",()=>{
        expect(plus(1,1)).toBe(2);
    })
})

/*
describe("name", ()=>{

})
*/


describe("Mathematische Funktionen", () => {
  describe("plus funktion", () => {
    test("1+1=2", () => {
      expect(plus(1, 1)).toBe(2);
    });
    // it() ist das gleiche wie test()

    it("plus1+1=2", () => {
      expect(plus(1, 1)).toBe(2);
    });
  });

  describe("mal funktion", () => {
    test("4*5=20", () => {
      expect(mal(4, 5)).toBe(20);
    });
  });

  describe("geteilt funktion", () => {
    test("99/1", () => {
      expect(geteilt(99, 1)).toBe(99);
    });

    test("99/0", () => {
      expect(geteilt(99, 0)).toBe("Mathematisch nicht erlaubt");
    });
  });

  describe("minus funktion", () => {
    test("88-43", () => {
      expect(minus(88, 43)).toBe(45);
    });
  });

  describe("random funktion", () => {
    it("random zahl zwischen 1-10", () => {
      expect(randomNumber()).toBeGreaterThanOrEqual(1);
      expect(randomNumber()).toBeLessThanOrEqual(10);
    });

    test("random zahl zwischen 1-10", () => {
      const min = 1;
      const max = 10;
      let x = randomNumber();
      //console.log("unsere random zahl ist: "+x);
      //console.log(x >= min && x <= max)
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
      x = randomNumber();
      expect(x >= min && x <= max).toBe(true);
    });
  });
  describe("integrationstests:", () => {
    test("Integration: 3*(5+7)", () => {
      expect(mal(plus(5, 7), 3)).toBe(36);
    });

    test("Integration: 3*(5/0)", () => {
      expect(mal(geteilt(5, 0), 3)).toBe(NaN);
    });
  });
});

