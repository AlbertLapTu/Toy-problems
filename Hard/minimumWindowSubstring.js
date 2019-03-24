/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * 
 * 
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

Object.prototype.size = obj => {
  let size = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
};

var minWindow = function(s, t) {
  let map = {};
  let solution = '';

  for (letter of t) {
    !map[letter] ? (map[letter] = 1) : map[letter]++;
  }

  let start = 0;
  let end = 0;
  let counter = Object.size(map);
  let longest;

  while (start < s.length) {
    let endPointerChar = s[end]; //Currently pointing at D

    //If we find end pointer's character in my map, decrease the count
    if (map[endPointerChar]) {
      map[endPointerChar]--;
      if (map[endPointerChar] === 0) {
        counter--;
      }
    }
    end++;

    while (counter === 0) {
      // TODO: HANDLE BASE CASE IF END-start < t.length

      let firstPointerChar = s[start];

      if (map[firstPointerChar]) {
        map[firstPointerChar]--;
        if (map[firstPointerChar] === 0) {
          counter--;
        }
      }
      start++;
    }
  }
  return solution;
};
