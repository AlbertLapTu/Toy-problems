/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */

function wordSubsets(A, B) {
  let res = [];
  let maxFreq = new Array(26).fill(0);

  // For each item in B
  for (let i = 0; i < B.length; i++) {
    let char = B[i];
    // Calculate the frequencies using frequency array
    let charFrequencies = charFreq(char);

    // Iterate through entire alphabet to allow for char lookup
    for (let j = 0; j < 26; j++) {
      // Get the max frequency from character, or the current stored value
      maxFreq[j] = Math.max(maxFreq[j], charFrequencies[j]);
    }
  }

  for (let i = 0; i < A.length; i++) {
    const curr = A[i];
    const currFreq = charFreq(curr);
    let isValid = true;

    for (let j = 0; j < 26; j++) {
      // If we have more words than what the word should have
      if (maxFreq[j] > currFreq[j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      res.push(curr);
    }
  }

  return res;
}

function charFreq(word) {
  let res = new Array(26).fill(0);

  for (const c of word) {
    res[c.charCodeAt() - 97]++;
  }

  return res;
}

module.exports = wordSubsets;
