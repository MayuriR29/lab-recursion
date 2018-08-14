const perfectNumber = require("./perfectNumber");
test("test perfect number", () => {
  expect(perfectNumber(6)).toBe('perfect number :-)');
  expect(perfectNumber(28)).toBe('perfect number :-)');
});

test("test not Deficient number", () => {
    expect(perfectNumber(7)).toBe('Deficient number');
    expect(perfectNumber(14)).toBe('Deficient number');
  });

  test("test not Abundant number", () => {
    expect(perfectNumber(9)).toBe('Deficient number');
    expect(perfectNumber(8)).toBe('Deficient number');
    expect(perfectNumber(20)).toBe('Abundant number');
  });