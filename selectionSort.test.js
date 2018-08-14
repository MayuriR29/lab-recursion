const selectionSort = require("./selectionSort");

test("test when array length is 1,return array", () => {
  expect(selectionSort([1])).toEqual([1]);
});
test("test should return sorted array", () => {
  let arr1 = [2, 1];
  let arr2 = [2, 5, 3];
  let arr3 = [4, 7, 2, 8, 10];
  // expect(selectionSort(arr1)).toEqual([1, 2]);
  // expect(selectionSort(arr2)).toEqual([2, 3, 5]);
  expect(selectionSort(arr3)).toEqual([2, 4, 7, 8, 10]);
});
