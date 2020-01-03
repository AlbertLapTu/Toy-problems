/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Since we know our upper value will always be 2, and lower bound will always be 0, we can just swap the values
of 0 and 2 and slowly move towards the middle until we can't swap anymore. By default, 1's will be swapped. 


*/
var sortColors = function(nums) {
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === 2 && i < end) {
      swap(nums, i, end);
      end--;
    }

    while (nums[i] === 0 && i > start) {
      swap(nums, i, start);
      start++;
    }
  }

  return nums;
};

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};
