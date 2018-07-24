const gcd = (num1, num2) => {
  var rem;
  if (num1 === num2) return null;

  if (num1 % num2 === 0) return num2;
  else {
    rem = num1 % num2;
    if (rem !== 0) {
      return gcd(num2, rem);
    }
  }
};
module.exports = gcd;
