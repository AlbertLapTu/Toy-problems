/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLargestSubstring = str => {
  let slowPointer = 0;
  let fastPointer = 0;
  let max = 0;
  let hash = {};

  //While we're not at the end of the string length
  while (fastPointer < str.length) {
    //If the character is not in the hashMap
    if (!hash[str[fastPointer]]) {
      //Set the character value to be true
      hash[str[fastPointer]] = true;
      //Find the max up until this character, converting out of 0-indexing
      max = Math.max(max, fastPointer - slowPointer + 1);
      //Expand the window
      fastPointer++;
    } else {
      //We found a duplicate cahracter, so we set to null
      hash[str[slowPointer]] = null;
      //Move the slow pointer
      slowPointer++;
    }
  }
  return max;
};

const lengthOfLargestSubstring = str => {
  let windowHash = {};
  let start = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (windowHash[char] >= start) {
      start = windowHash[char] + 1;
    }

    windowHash[char] = i;
    longest = Math.max(longest, i - start + 1);
  }
  return longest;
};
