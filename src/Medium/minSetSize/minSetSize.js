/**
 * @param {number[]} arr
 * @return {number}
 */

function minSetSize(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const halfLength = Math.floor(arr.length / 2);
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    !hash[num] ? (hash[num] = 1) : hash[num]++;
  }

  const values = Object.values(hash).sort((a, b) => b - a);

  let count = 0;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    sum += val;
    count++;
    if (sum >= halfLength) {
      return count;
    }
  }

  return -1;
}

module.exports = minSetSize;
