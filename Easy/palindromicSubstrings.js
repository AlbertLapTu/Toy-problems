/**
 * @param {string}
 * @return {number}
 */

var countSubstrings = function(s) {
  let split = s.split('');
  let palindromeCount = 0;
  let queue = [];

  for (let i = 0; i < split.length; i++) {
    queue.push(split[i]);
    for (let j = 1; j < split.length; j++) {
      if (isPalindrome(queue)) {
        palindromeCount++;
        queue.push(split[j]);
      } else {
        break;
      }
    }
    queue = [];
  }
  return palindromeCount;
};

var isPalindrome = function(array) {
  if (array.length === 1) {
    return true;
  }

  if (array[0] === array[array.length - 1]) {
    return true;
  } else {
    return false;
  }
  return isPalindrome(array.slice(1, array.length - 1));
};
