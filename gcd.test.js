const GreatestCommonDivisor = require("./gcd");

test("test for equal numbers", () => {
  expect(GreatestCommonDivisor(2, 2)).toBe(null);
});

test("test for similar scenario numbers", () => {
  expect(GreatestCommonDivisor(9, 3)).toBe(3);
  expect(GreatestCommonDivisor(10, 4)).toBe(2);
  expect(GreatestCommonDivisor(45, 210)).toBe(15);
});

test.skip("test for negative numbers", () => {
  expect(GreatestCommonDivisor(-9, -3)).toBe(3);
});
