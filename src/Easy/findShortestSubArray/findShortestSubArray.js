/*

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2

Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:

[1, 2, 2, 3, 1], [2, 2, 3, 1], [1, 2, 2, 3],  [1, 2, 2], [2, 2, 3], [2, 2]

The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function findShortestSubArray(nums) {
  if (!nums.length) return [];

  // Simulate subarrays by keeping track of each numbers first and last index appearance
  const counts = {};
  const firstIndex = {};
  const lastIndex = {};

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // FInd the degree of the array
    const num = nums[i];
    counts[num] = (counts[num] || 0) + 1;

    max = Math.max(max, counts[num]);

    // Keep track of the first index where each number appears in
    // Ignore all appearances if number shows up again
    if (firstIndex[num] === undefined) {
      firstIndex[num] = i;
    }

    // Keep track of the last index where each number appears in
    lastIndex[num] = i;
  }

  // Go over counts. If you find the degree, take the last appearance and subtract from first
  let res = nums.length;
  for (const num in counts) {
    if (counts[num] === max) {
      res = Math.min(res, lastIndex[num] - firstIndex[num] + 1);
    }
  }

  return res;
}

module.exports = findShortestSubArray;
