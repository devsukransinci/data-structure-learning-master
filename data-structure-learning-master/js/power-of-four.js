/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfFour = function (n) {
  if (n == 0) return false;
  if (n == 1) return true;
  if (n % 4 == 0) return isPowerOfFour(n / 4);
  return false;
};

console.log(isPowerOfFour(15));
