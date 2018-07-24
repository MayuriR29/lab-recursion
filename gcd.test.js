const myFunction = require("./gcd");
test("test for equal numbers", () => {
  expect(myFunction(2, 2)).toBe(null);
});
test("test for similar scenario numbers", () => {
  expect(myFunction(9, 3)).toBe(3);
  expect(myFunction(10, 4)).toBe(2);
  expect(myFunction(210, 45)).toBe(15);
});

module.exports = myFunction;
