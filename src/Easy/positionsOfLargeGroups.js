/*

In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.

*/

/**
 * @param {string} S
 * @return {number[][]}
 */

var largeGroupPositions = function(S) {
  const res = [];
  if (!S || S.length <= 2) return res;

  let i = 0;
  let j = 0;

  // Assume S[i] === S[j]
  while (j < S.length) {
    // If they're not, check j vs i distance
    if (S[i] !== S[j]) {
      if (j - i >= 3) {
        res.push([i, j - 1]);
        i = j;
      }
    }
    j++;
  }

  // Edge case
  if (j - i >= 3) {
    res.push([i, j - 1]);
  }
  return res;
};
