/**
 * @param {number[]} A
 * @return {number}
 */

/*

Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11

*/

var maxScoreSightseeingPair = function(A) {
  if (!A.length) return A;
  let currentMax = A[0];
  let max = 0;

  for (let j = 1; j < A.length; j++) {
    max = Math.max(max, currentMax + A[j] - j);
    currentMax = Math.max(currentMax, A[j] + j);
  }

  return max;
};
