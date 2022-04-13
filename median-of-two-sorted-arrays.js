/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//  Runtime: 180 ms, faster than 33.30% of JavaScript online submissions for Median of Two Sorted Arrays.
//  Memory Usage: 48.1 MB, less than 44.68% of JavaScript online submissions for Median of Two Sorted Arrays.
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedList = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedList.length % 2) {
    return mergedList[Math.floor(mergedList.length / 2)];
  }
  return (
    (mergedList[mergedList.length / 2] +
      mergedList[mergedList.length / 2 - 1]) /
    2
  );
};
