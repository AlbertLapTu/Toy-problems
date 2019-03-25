var containsDuplicate = function(nums) {
  let HashMap = {};

  if (nums.length === 0 || nums.length === 1) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    if (HashMap[nums[i]]) {
      return true;
    } else {
      HashMap[nums[i]] = 1;
    }
  }
  return false;
};
