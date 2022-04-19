/**
 * @param {string} s
 * @return {number}
 */

//  Runtime: 159 ms, faster than 69.20% of JavaScript online submissions for Roman to Integer.
//  Memory Usage: 47.4 MB, less than 52.67% of JavaScript online submissions for Roman to Integer.
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && symbols[s[i + 1]] > symbols[s[i]]) {
      result -= symbols[s[i]];
    } else {
      result += symbols[s[i]];
    }
  }
  return result;
};
