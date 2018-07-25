const binarySearch = (arr, target) => {
    const midIndex = Math.floor(arr.length / 2);
    if (target === arr[midIndex]) return midIndex;
    if (target < arr[midIndex]) {
      const newArr = arr.slice(0, midIndex);
      return binarySearch(newArr, target);
    }
    const newArr = arr.slice(midIndex, arr.length);
    return binarySearch(newArr, target) + midIndex;
  };
  
  module.exports = binarySearch;