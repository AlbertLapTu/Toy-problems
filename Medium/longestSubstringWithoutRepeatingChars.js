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
