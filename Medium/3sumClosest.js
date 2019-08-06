/*

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

const threeSumClosest = (nums, target) => {
  let result = Number.MAX_SAFE_INTEGER;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      //Calculate the closest sum
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      //Same 3sum condition of moving pointers
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        //By this point, sum === target
        return sum;
      }
    }
  }
  return result;
};
