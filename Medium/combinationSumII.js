/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
  const output = [];
  candidates.sort((a, b) => a - b);
  permutate(candidates, output, [], target, 0);

  return output;
};

/**
 *
 * @param {array} candidates
 * @param {array} output
 * @param {number} current
 * @param {number} runningTotal
 * @param {number (index)} start
 */

const permutate = (candidates, output, permutation = [], runningTotal, start) => {
  if (runningTotal === 0) {
    output.push(permutation);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    let candidate = candidates[i];
    if (candidate > runningTotal) break;

    // If the number is the same, but the index is different, this can still be included in on the list.
    // The only different logic is this one needs to have only unique values.
    if (i !== start && candidate === candidates[i - 1]) {
      continue;
    }
    permutate(candidates, output, permutation.concat(candidate), runningTotal - candidate, i + 1);
  }
};
