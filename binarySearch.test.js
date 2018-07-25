const binarySearch = require("./binarySearch");

it("should return the middle index if target is right in the middle", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
});

it("should return the correct index if target is before the middle", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  expect(binarySearch([4, 8, 12, 16, 20, 24, 28, 32], 12)).toEqual(2);
});

it("should return the correct index if target is after the middle", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 9)).toEqual(8);
});

it("should return the correct index if array length is even", () => {
  expect(binarySearch([1, 2, 3, 4], 2)).toEqual(1);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).toEqual(4);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toEqual(1);
});
