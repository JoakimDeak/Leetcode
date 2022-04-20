/**
 * @param {string[]} strs
 * @return {string}
 */

//  Runtime: 73 ms, faster than 71.86% of JavaScript online submissions for Longest Common Prefix.
//  Memory Usage: 42.3 MB, less than 83.82% of JavaScript online submissions for Longest Common Prefix.
const longestCommonPrefix = (strs) => {
  if (strs.length === 1) {
    return strs[0];
  }
  let longestPrefix = '';
  while (strs.every((str) => !!str && str.startsWith(longestPrefix))) {
    let newPrefix = strs[0].substring(0, longestPrefix.length + 1);
    if (longestPrefix.length === strs[0].length) {
      return longestPrefix;
    }
    if (newPrefix.length > longestPrefix.length) {
      longestPrefix = newPrefix;
    }
  }
  return longestPrefix.slice(0, -1);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'should be fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']), 'should be ""');
console.log(longestCommonPrefix(['']), 'should be ""');
console.log(longestCommonPrefix(['', '']), 'should be ""');
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']), 'should be flower');
