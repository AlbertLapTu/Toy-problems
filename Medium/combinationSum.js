/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];

  const permutate = (candidates, target, index, permutations = []) => {
    if (target === 0) {
      result.push(permutations);
    }

    for (let i = index; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        permutate(candidates, target - candidates[i], i, permutations.concat(candidates[i]));
      }
    }
  };
  permutate(candidates, target, 0, []);
  return result;
};
