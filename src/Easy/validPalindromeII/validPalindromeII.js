/*

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Intuition: Use two pointers to scan from left to right. If youf ind a letter that doesn't equal 
the other side's pointer, "skip it". You can skip by using a helper function. 

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
  if (!s.length) return false;
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }
  }
  return true;
};

const isPalindrome = (str, start, end) => {
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
