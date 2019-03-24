/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let split = s.split(' ');

  return split
    .map(word => {
      return word
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
};
