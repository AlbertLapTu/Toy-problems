function nextGreaterElementII(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let end = nums.length - 1;
    let j = i + 1;
    if (i === end) {
      j = 0;
    }

    if (nums[j] > nums[i]) {
      res.push(nums[j]);
      continue;
    }

    while (nums[i] >= nums[j]) {
      if (j === i) {
        res.push(-1);
        break;
      }

      if (j === nums.length - 1) {
        j = -1;
      }
      j++;

      if (nums[j] > nums[i]) {
        res.push(nums[j]);
        break;
      }
    }
  }

  return res;
}

module.exports = nextGreaterElementII;
