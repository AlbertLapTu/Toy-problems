/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minStepsForTwoAnagrams(s, t) {
  if (s === t) return 0;
  const sHash = {};

  // Count all characters of s
  for (const char of s) {
    !sHash[char] ? (sHash[char] = 1) : sHash[char]++;
  }

  let count = 0;
  //Find how many characters in t are in s
  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (!(char in sHash)) {
      count++;
    } else {
      sHash[char]--;
      if (sHash[char] === 0) {
        delete sHash[char];
      }
    }
  }

  return count;
}

module.exports = minStepsForTwoAnagrams;
