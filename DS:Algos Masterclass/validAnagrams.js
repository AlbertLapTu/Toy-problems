/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is
 * a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed into iceman.
 * @param {string} str1
 * @param {string} str2
 *
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram'amanaplanacanalpanama', 'acanalmanplanpamana') //false
 */

const validAnagram = (str1, str2) => {
  let storage = {};

  if (str1.length !== str1.length) {
    return false;
  }

  for (let letter of str1) {
    storage[letter] ? storage[letter]++ : (storage[letter] = 1);
  }

  for (let letter of str2) {
    if (!storage[letter]) {
      return false;
    } else {
      storage[letter]--;
    }
  }

  return true;
};
