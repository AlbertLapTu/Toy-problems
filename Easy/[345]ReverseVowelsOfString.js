/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
  let splitStr = s.split('');
  let slow = 0;
  let fast = splitStr.length - 1;

  while (slow < fast) {
    //While slow isn't a vowel, move it up
    while (!isVowel(splitStr[slow]) && slow < fast) slow++;
    //While fast isn't a vowel, move it down
    while (!isVowel(splitStr[fast]) && slow < fast) fast--;

    swap(splitStr, slow, fast);
    slow++;
    fast--;
  }
  return splitStr.join('');
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  return arr;
};

//Checks lowercase and uppercase vowels.
const isVowel = char => {
  let charCode = char.charCodeAt();
  if (
    charCode === 97 ||
    charCode === 101 ||
    charCode === 105 ||
    charCode === 111 ||
    charCode === 117 ||
    charCode === 65 ||
    charCode === 69 ||
    charCode === 73 ||
    charCode === 79 ||
    charCode === 85
  ) {
    return true;
  }
  return false;
};
