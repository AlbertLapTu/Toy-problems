/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

/*
Optimized solution

var twoSum = function(nums, target) {
  let answer = [];
  let exist = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof(exist[target-nums[i]]) !== 'undefined') {
      return [exist[target-nums[i]], i];
    }
    exist[nums[i]] = i;
  }
}

*/
