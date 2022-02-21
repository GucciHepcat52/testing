const { returnTwo, greeting, add } = require("./functions.js");

describe("returnTwo test", () => {
  let twoReturned = returnTwo();
  test("returnTwo function should return number", () => {
    expect(twoReturned).toBe(2);
  });
});

describe("greeting test", () => {
  let greetingPhrase = greeting("Dallin");
  test("greeting function should return string", () => {
    expect(greetingPhrase).toBe("Hello, Dallin");
  });
});

describe("add test", () => {
  let added = add(12, 40);
  test("add function should return sum of numbers", () => {
    expect(added).toBe(52);
  });
});
