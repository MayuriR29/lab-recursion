const countdown = n => {
  if (n < 0) return;
  if (n === 0) {
    //base condition
    console.log("done!");
  } else {
    console.log(n);
    countdown(n - 1); //recursion
  }
};
// countdown(-5);
const sum = array => {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + sum(array.slice(1));
  }
};
// console.log(sum([4, 3, 1]));
const factorial = num => {
  if (n < 0) return null; //termination condition
  if (num === 0) return 1;//base condition
  else {
    return num * factorial(num - 1);//recursion
  }
};
console.log(factorial(1));
