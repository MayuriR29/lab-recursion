const insertionSort = require("./insertionSort");
test("insertionSort(nums) should return an arr of numbers sorted in ascending order", () => {
  const array = [4, 1, 2, 3];
  const array1=[3,6,9,1,5,2,7,8,4]
  expect(insertionSort(array)).toEqual([1, 2, 3, 4]);
  expect(insertionSort(array1)).toEqual([1, 2, 3, 4,5,6,7,8,9]);
});
