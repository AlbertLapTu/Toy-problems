/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  if (arr.length === 0) {
    return arr;
  }
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(max, temp);
  }

  arr[arr.length - 1] = -1;
  return arr;
};

module.exports = replaceElements;
