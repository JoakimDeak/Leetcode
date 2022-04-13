/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//  Runtime: 72 ms, faster than 98.91% of JavaScript online submissions for Zigzag Conversion.
//  Memory Usage: 46.5 MB, less than 78.40% of JavaScript online submissions for Zigzag Conversion.
const convert = (s, numRows) => {
  let result = "";
  if (numRows === 1) {
    return s;
  }
  for (let i = 0; i < numRows; i++) {
    let sumThing = (numRows - 1) * 2,
      firstOfPair = sumThing - i * 2,
      secondOfPair = sumThing - firstOfPair,
      index = i,
      alternator = 0;
    while (index < s.length) {
      result += s[index];
      if (alternator % 2 === 0) {
        index += firstOfPair === 0 ? secondOfPair : firstOfPair;
      } else {
        index += secondOfPair === 0 ? firstOfPair : secondOfPair;
      }
      alternator++;
    }
  }
  return result;
};

// console.log(convert("012345678", 3));
console.log(convert("ab", 1));
