/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*
Brute force didn't work, need DP. 

*/

// Attempt 1
function maxSumAfterPartitioning(A, K) {
  const maxArr = new Array(A.length).fill(0);
  const end = A.length - K + 1; // At this index, we can't look forward K times
  // iterate forwards
  for (let i = 0; i < A.length; i++) {
    if (i >= end) {
      maxArr[i] = Math.max(A[i], ...A.slice(i));
    } else {
      maxArr[i] = Math.max(A[i], ...A.slice(i, i + K));
    }
  }

  const start = K;
  const secondMaxArr = new Array(A.length).fill(0);
  for (let i = A.length - 1; i >= 0; i--) {
    if (i <= start) {
      secondMaxArr[i] = Math.max(A[i], ...A.slice(0, i));
    } else {
      secondMaxArr[i] = Math.max(A[i], ...A.slice(i - K + 1, i + 1));
    }
  }
}

module.exports = maxSumAfterPartitioning;
