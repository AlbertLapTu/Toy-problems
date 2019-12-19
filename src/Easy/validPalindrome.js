/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s.length) return true;
  const regex = /[^a-z0-9]/g;
  s = s
    .trim()
    .toLowerCase()
    .replace(regex, '');

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
