/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maxAppearance = Math.ceil(nums.length / 2);
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    !hashMap[nums[i]] ? (hashMap[nums[i]] = 1) : hashMap[nums[i]]++;
  }

  for (key in hashMap) {
    if (hashMap[key] >= maxAppearance) {
      return key;
    }
  }
};
