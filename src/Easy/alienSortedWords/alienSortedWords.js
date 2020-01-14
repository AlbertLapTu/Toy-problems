/*

In an alien language, surprisingly they also use english lowercase letters, but possibly 
in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the 
sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter 
(in size.) According to lexicographical rules "apple" > "app", because 
'l' > '∅', where '∅' is defined as the blank character which is less than any other 
character

*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

function alienSortedWords(words, order) {
  const dict = {};
  let res = [];

  for (let i = 0; i < order.length; i++) {
    let char = order[i];
    // eslint-disable-next-line multiline-ternary
    !dict[char] ? (dict[char] = i) : dict[char];
  }

  for (let i = 0; i < words.length - 1; i++) {
    let result = comparison(words[i], words[i + 1], dict);
    res.push(result);
  }

  return res.every((x) => x === true);
}

function comparison(word1, word2, dict) {
  for (let i = 0; i < word1.length; i++) {
    let char1 = word1[i];
    let char2 = word2[i];

    if (dict[char1] < dict[char2]) {
      return true;
    } else if (dict[char1] > dict[char2]) {
      return false;
    } else {
      continue;
    }
  }
}

module.exports = alienSortedWords;
