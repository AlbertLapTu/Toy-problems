/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const res = [];

  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    let [qWord, qFreq] = helper(q);
    let num = 0;

    for (let j = 0; j < words.length; j++) {
      let w = words[j];
      let [wWord, wFreq] = helper(w);
      if (wFreq > qFreq) {
        num++;
      }
    }
    res.push(num);
  }
  return res;
};

// Helper function to find the smallest character's frequency
function helper(word) {
  let hash = {};
  let leastChar = 'z';

  for (const ch of word) {
    !hash[ch] ? (hash[ch] = 1) : hash[ch]++;
  }

  for (const key in hash) {
    const keyCode = key.charCodeAt();
    const lastChCode = leastChar.charCodeAt();
    if (keyCode < lastChCode) {
      leastChar = key;
    }
  }

  return [leastChar, hash[leastChar]];
}

module.exports = numSmallerByFrequency;
