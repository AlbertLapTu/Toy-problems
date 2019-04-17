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

  while (j < str.length) {
    if (hashMap[str[j]]) {
      //You find the character, so you start moving the I pointer by setting all it's values to null;
      hashMap[charAtI] = null;
      i++;
    } else {
      hashMap[str[j]] = true;
      max = Math.max(maxSubstring, j - 1 + 1);
      j++;
    }
  }
  return maxSubstring;
};
