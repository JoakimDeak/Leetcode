/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//  Runtime: 138 ms, faster than 58.86% of JavaScript online submissions for Regular Expression Matching.
//  Memory Usage: 42.3 MB, less than 96.27% of JavaScript online submissions for Regular Expression Matching.
const isMatch = (string, regex) => {
  return !!string.match(`^${regex}$`);
};
