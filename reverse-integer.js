/**
 * @param {number} x
 * @return {number}
 */

//  Runtime: 91 ms, faster than 63.57% of JavaScript online submissions for Reverse Integer.
//  Memory Usage: 43.9 MB, less than 72.48% of JavaScript online submissions for Reverse Integer.
const reverse = (x) => {
  let result = 0;
  if (x < 10 && x > -10) {
    return x;
  }
  const sign = x < 0 ? -1 : 1;
  input = Math.abs(x);
  while (input > 0) {
    const rightDigit = input % 10;
    result = result * 10 + rightDigit;
    input = (input / 10) | 0;
  }
  if (result > Math.pow(2, 31)) {
    return 0;
  }
  return result * sign;
};
