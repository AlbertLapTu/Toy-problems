/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

Intuition: Backtrack/permutation problem. Write a helper function to generate permutations, and another
helper function to check whether or not the input string is a palindrome. 

Learning: For specific backtracking problems, we need to pass in the index in which to start the next for
loop, as we have already calculated the first palindrome. 

*/

/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
  if (!s.length) return s;
  const permutations = [];

  partitionString(s, 0, [], permutations);
  return permutations;
};

const partitionString = (str, startIdx, partition, permutations) => {
  if (startIdx === str.length) {
    permutations.push(partition.slice());
  }

  for (let i = startIdx; i < str.length; i++) {
    let subStr = str.slice(startIndex, i + 1);
    if (!isPalindrome(subStr)) {
      continue;
    } else {
      partitionString(str, (i += 1), partition.concat(subStr), permutations);
    }
  }
};

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
