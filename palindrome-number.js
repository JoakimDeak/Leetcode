/**
 * @param {number} x
 * @return {boolean}
 */

//  Runtime: 184 ms, faster than 82.64% of JavaScript online submissions for Palindrome Number.
//  Memory Usage: 50.6 MB, less than 84.85% of JavaScript online submissions for Palindrome Number.
const isPalindrome = (x) => {
  let xString = String(x);
  for (let i = 0; i < xString.length / 2; i++) {
    let right = xString.length - i - 1;
    if (i !== right) {
      if (xString.charAt(i) !== xString.charAt(right)) {
        return false;
      }
    }
  }
  return true;
};

// Runtime: 146 ms, faster than 96.28% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 50.8 MB, less than 71.90% of JavaScript online submissions for Palindrome Number.
const isPalindromeWithBitwise = (x) => {
  if (x < 0) {
    return false;
  }

  let numbers = [];

  while (x > 0) {
    numbers.push(x % 10);
    x = (x / 10) | 0;
  }
  let end = numbers.length - 1;
  for (let i = 0; i < end / 2; i++) {
    if (numbers[i] !== numbers[end - i]) {
      return false;
    }
  }
  return true;
};
