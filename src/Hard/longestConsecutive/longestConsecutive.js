/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
  if (!nums.length) return 0;

  let numSet = new Set(nums);
  let maxLen = Number.MIN_SAFE_INTEGER;

  numSet.forEach((num) => {
    if (!numSet.has(num - 1)) {
      let curr = num;
      let newLen = 1;
      while (numSet.has(curr + 1)) {
        newLen++;
        curr++;
      }
      maxLen = Math.max(newLen, maxLen);
    }
  });
  return maxLen;
}

module.exports = longestConsecutive;
