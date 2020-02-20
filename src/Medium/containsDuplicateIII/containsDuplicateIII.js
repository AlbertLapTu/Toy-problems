/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

// O(N^2) solution.
// function containsDuplicateIII(nums, k, t) {
//   if (!nums.length) return false;
//   let foundT = false;
//   let foundK = false;

//   for (let i = 0; i < nums.length; i++) {
//     const numsI = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       const numsJ = nums[j];
//       const diff = Math.abs(numsI - numsJ);
//       const idxDiff = Math.abs(j - i);

//       if (diff > t || idxDiff > k || i === j) {
//         continue;
//       }

//       if (diff <= t) {
//         foundT = true;
//       }

//       if (idxDiff <= k) {
//         foundK = true;
//       }
//     }
//   }

//   return foundT && foundK;
// }

// O(N log n) solution
function containsDuplicateIII(nums, k, t) {
  const newNums = nums
    .map((el, i) => ({ element: el, idx: i }))
    .sort((a, b) => a.element - b.element);

  let left = 0;
  let right = 1;

  while (right < newNums.length) {
    const diff = Math.abs(newNums[right].element - newNums[left].element);
    const idxDiff = Math.abs(newNums[left].idx - newNums[right].idx);

    if (diff <= t && idxDiff <= k) {
      return true;
    } else if (diff > t) {
      left++;
    } else if (idxDiff > k) {
      right++;
    }

    if (left === right) {
      right++;
    }
  }

  return false;
}

module.exports = containsDuplicateIII;
