/**
 * @param {string} s
 * @return {string}
 */

//  Runtime: 174 ms, faster than 58.53% of JavaScript online submissions for Longest Palindromic Substring.
//  Memory Usage: 44.9 MB, less than 75.83% of JavaScript online submissions for Longest Palindromic Substring.
const longestPalindrome = (s) => {
  if (s.length === 1) {
    return s;
  }

  const getPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  };

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const oddPal = getPalindrome(s, i, i);
    const evenPal = getPalindrome(s, i, i + 1);

    longest =
      oddPal.length > evenPal.length
        ? oddPal.length > longest.length
          ? oddPal
          : longest
        : evenPal.length > longest.length
        ? evenPal
        : longest;
  }
  return longest;
};
