/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Attempt 1: Find the product of the whole array on first scan. Scan again, and divide each element by the 
total product. Can't implement it this way due to the division constraint. 

Attempt 2: Scan over the array from left to right. 

 */
var productExceptSelf = function(nums) {
  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }

  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
