const swap = (arr, index1, index2) => {
  const arrCopy = arr.slice();
  [arrCopy[index1], arrCopy[index2]] = [arrCopy[index2], arrCopy[index1]];
  return arrCopy;
};

const insertionSort = numbers => {
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i; j >0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        numbers = swap(numbers, j, j - 1);
      } else break;
    }
  }
  return numbers;
};
module.exports = insertionSort;
