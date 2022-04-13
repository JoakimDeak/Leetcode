/**
 * @param {string} s
 * @return {number}
 */

//  Runtime: 70 ms, faster than 95.43% of JavaScript online submissions for String to Integer (atoi).
//  Memory Usage: 45 MB, less than 46.32% of JavaScript online submissions for String to Integer (atoi).
var myAtoi = function (s) {
  const clamp = (num) =>
    Math.min(Math.max(num, -Math.pow(2, 31)), Math.pow(2, 31) - 1);

  const finalResult = (result) => {
    return clamp(result ? result : 0);
  };

  let startedParsing = false;

  let result = 0,
    sign;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (startedParsing) {
        return finalResult(result * sign);
      } else if (sign) {
        return finalResult(result * sign);
      }
      continue;
    }
    if (s[i] === "-" || s[i] === "+") {
      if (startedParsing) {
        return finalResult(result * sign);
      }
      if (sign) {
        return 0;
      }
      sign = s[i] === "-" ? -1 : 1;
      continue;
    }
    sign = sign ? sign : 1;
    if (s[i] === "0" && !startedParsing) {
      startedParsing = true;
      continue;
    }
    if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s[i])) {
      return finalResult(result * sign);
    }
    startedParsing = true;
    result = result * 10 + Number(s[i]);
  }
  return finalResult(result * sign);
};
