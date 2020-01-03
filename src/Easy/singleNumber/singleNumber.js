/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    !hashMap[nums[i]] ? (hashMap[nums[i]] = 1) : hashMap[nums[i]]++;
  }

  for (key in hashMap) {
    if (hashMap[key] <= 1) {
      return Number(key);
    }
  }
  return -1;
};
