/**
 * @param {number} num
 * @return {string}
 */

//  Runtime: 136 ms, faster than 79.26% of JavaScript online submissions for Integer to Roman.
//  Memory Usage: 46.3 MB, less than 98.72% of JavaScript online submissions for Integer to Roman.
const values = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' }
];

const intToRoman = (num) => {
  let result = '';
  for (let i = 0; i < values.length; i++) {
    if (values[i].value > num) {
      continue;
    }
    result += values[i].symbol.repeat(num / values[i].value);
    num -= ((num / values[i].value) | 0) * values[i].value;
  }
  return result;
};
