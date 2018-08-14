const swap = (arr, index1, index2) => {
  const arrCopy = arr.slice();
  [arrCopy[index1], arrCopy[index2]] = [arrCopy[index2], arrCopy[index1]];
  return arrCopy;
};

const getMinIndex = slicedArr => {
  const min = Math.min(...slicedArr);
  return slicedArr.indexOf(min);
};

const selectionSort = array => {
  let minIndex;
  let sortedArray = [];
  let swappedArray = [];
  if (array.length === 1 || array.length === 0) return array;
  minIndex = getMinIndex(array); //[ 7, 2, 8, 10 ]//2,8,10
  swappedArray = swap(array, 0, minIndex);
  sortedArray.push(swappedArray[0]);
  console.log('sortedArray',sortedArray);
  return sortedArray.concat(selectionSort(swappedArray.slice(1)));
};
module.exports = selectionSort;
