/**
 * @param {string[]} words
 * @return {number}
 */
function maxProductOfWordLengths(words) {
  let maxLen = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isUnique(words[i], words[j])) {
        maxLen = Math.max(maxLen, words[i].length * words[j].length);
      }
    }
  }

  return maxLen;
}

function isUnique(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      return false;
    }
  }

  return true;
}

module.exports = maxProductOfWordLengths;
