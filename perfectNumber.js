const perfectNumber = number => {
  let divisor = [];

  for (let i = number; i >= 1; i--) {
    const div = Math.floor(number / i);
    const rem = number % i;
    if (rem === 0 && div !== number) {
      divisor.push(div);
    }
  }

  const sum = divisor.reduce((a, b) => a + b);
  if (sum === number) {
    return "perfect number :-)";
  }
  if (sum > number) {
    return "Abundant number";
  }
  return "Deficient number";
};

module.exports = perfectNumber;
