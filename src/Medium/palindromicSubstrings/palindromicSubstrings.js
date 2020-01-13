/*

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

/**
 * @param {string} s
 * @return {number}
 */

function countSubstrings(s) {
  if (!s.length) return 0;
  let count = 0;

  const expand = (i, j) => {
    while (i >= 0 && j <= s.length) {
      if (s[i] === s[j]) {
        count++;
        i--;
        j++;
      } else {
        break;
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return count;
}

module.exports = countSubstrings;
