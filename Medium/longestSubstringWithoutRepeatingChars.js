/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = str => {
  let hashMap = {};
  let maxSubstring = 0;
  let i = 0;
  let j = 0;

  //J will be the faster pointer
  //I will be the slower pointer

  //While we're not at the end of the string length
  while (j < str.length) {
    //If the hashMap contains the character
    if (hashMap[str[j]]) {
      //We've reached the longest window of unique characters
      //Start moving firstPointer
      hashMap[charAtI] = null;
      i++;
    } else {
      //Set character to true, as it is unique.
      hashMap[str[j]] = true;
      //Calculate the max (remember about adding 1 due to 0 index)
      max = Math.max(maxSubstring, j - 1 + 1);
      //Move J along the window
      j++;
    }
  }
  return maxSubstring;
};
