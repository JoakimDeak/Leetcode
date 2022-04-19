/**
 * @param {number[]} height
 * @return {number}
 */

//  Runtime: 89 ms, faster than 71.23% of JavaScript online submissions for Container With Most Water.
//  Memory Usage: 49.2 MB, less than 96.56% of JavaScript online submissions for Container With Most Water.
const maxArea = (height) => {
  let largest = -1;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (largest < area) {
      largest = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return largest;
};
