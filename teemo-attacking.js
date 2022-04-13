/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

// Runtime: 74 ms, faster than 82.76% of JavaScript online submissions for Teemo Attacking.
// Memory Usage: 45.4 MB, less than 80.60% of JavaScript online submissions for Teemo Attacking.
const findPoisonedDuration = (timeSeries, duration) => {
  let sum = 0;
  if (timeSeries.length === 1) {
    return duration;
  }
  for (let i = 1; i < timeSeries.length; i++) {
    const diff = timeSeries[i] - timeSeries[i - 1];
    if (diff <= duration - 1) {
      sum += diff;
    } else {
      sum += duration;
    }
  }
  sum += duration;
  return sum;
};
