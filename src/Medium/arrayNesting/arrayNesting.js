/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  // Unnecessary wasted space
  // const arrIndexes = new Array(nums.length).fill(false);
  const uniques = new Set();

  function lengthAtPosition(i) {
    let count = 0;

    while (!uniques.has(i)) {
      uniques.add(i);
      i = nums[i];
      count++;
    }

    return count;
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    max = Math.max(max, lengthAtPosition(i));
  }

  return max;
};

module.exports = arrayNesting;
