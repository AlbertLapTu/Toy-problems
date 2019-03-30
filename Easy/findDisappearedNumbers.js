/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let hashMap = {};
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    !hashMap[nums[i]] ? (hashMap[nums[i]] = 1) : hashMap[nums[i]]++;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hashMap[i]) {
      output.push(i);
    }
  }
  return output;
};
