/**
 * @param {string} s
 * @return {boolean}
 */

/*

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple 
copies of the substring together. You may assume the given string consists of lowercase English letters 
only and its length will not exceed 10000.


Solution time complexity:

Time: O(n^2). For every iteration, we construct a new substring and repeat it 
Space: O(n^2). Allocating space on every iteration. 

We can minimize both time/space down to O(n) using KMP. 

*/
var repeatedSubstringPattern = function(s) {
  if (s.length <= 1) return false;

  for (let i = 1; i < s.length; i++) {
    let strPartial = s.slice(0, i).repeat(s.length / i);

    if (strPartial === s) return true;
  }
  return false;
};
