const greatestCommonDivisor = (num1, num2) => {
  const remainder = num1 % num2;
  if (num1 === num2) return null;

  if (remainder === 0) return num2;

  return greatestCommonDivisor(num2, remainder);
};
module.exports = greatestCommonDivisor;
