/*

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

*/

var wordPattern = function(pattern, str) {
  str = str.split(' ');

  if (str.length !== pattern.length) return false;
  let hashMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = pattern[i];
    //If you have the word in the hash
    if (hashMap[char]) {
      //Check to see if it maps to word
      if (hashMap[char] !== str[i]) {
        return false;
      }
      //If it's not in the hash
    } else {
      //If the word has been mapped to a character,return false
      if (Object.values(hashMap).indexOf(str[i]) !== -1) {
        return false;
      } else {
        //Otherwise, the word is unique and add to hash
        hashMap[char] = str[i];
      }
    }
  }
  return true;
};
