/*

The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

*/

// Times out after n >= 31
// function tribonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;

//   const hash = {0: 0, 1: 1, 2: 1};

//   if (!hash[n]) {
//     hash[n] = tribonacci(n - 1, hash) + tribonacci(n - 2, hash) + tribonacci(n - 3, hash);
//   } else {
//     return hash[n];
//   }

//   return hash[n];
// }

function tribonacci(n, hash = [0, 1, 1]) {
  if (n < 0) return 0;

  if (hash[n]) {
    return hash[n];
  }
  /* eslint-disable no-param-reassign */
  hash[n] = tribonacci(n - 1, hash) + tribonacci(n - 2, hash) + tribonacci(n - 3, hash);

  return hash[n];
}

module.exports = tribonacci;
