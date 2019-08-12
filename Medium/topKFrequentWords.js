/*


Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.


    */

var topKFrequent = function(words, k) {
  let hash = {};
  let output = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    !hash[word] ? (hash[word] = 1) : hash[word]++;
  }

  let sortedKeys = Object.entries(hash).sort(comparatorFn);

  for (let i = 0; i < k; i++) {
    let [word, frequency] = sortedKeys[i];
    output.push(word);
  }
  return output;
};

const comparatorFn = (a, b) => {
  //If a is less than b, return -1
  //If a is greater than b by some criteria, return 1
  //If a === b, return 0

  //Check to see if the frequencies are equal
  if (a[1] === b[1]) {
    //If a is greater than b, b comes first
    return a[0] > b[0] ? 1 : -1;
  }

  return b[1] - a[1];
};
