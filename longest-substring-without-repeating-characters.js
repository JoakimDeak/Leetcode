/**
 * @param {string} s
 * @return {number}
 */

//  Runtime: 97 ms, faster than 85.41% of JavaScript online submissions for Longest Substring Without Repeating Characters.
//  Memory Usage: 47.1 MB, less than 73.13% of JavaScript online submissions for Longest Substring Without Repeating Characters.
const lengthOfLongestSubstring = (s) => {
  let longestSubstring = 0;
  let seenChars = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (seenChars.has(s[right])) {
      seenChars.delete(s[left]);
      left++;
    }
    seenChars.add(s[right]);
    longestSubstring = Math.max(seenChars.size, longestSubstring);
  }

  return longestSubstring;
};
