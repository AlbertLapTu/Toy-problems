/*

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
  Input: 2736
  Output: 7236
  Explanation: Swap the number 2 and the number 7.

Example 2:
  Input: 9973
  Output: 9973
  Explanation: No swap.

*/

/**
 * @param {number} num
 * @return {number}
 */

var maximumSwap = function(num) {
  if (num === 0) return num;
  let numArr = num.toString().split('');
  let max, idx1, idx2;

  for (let i = 0; i < numArr.length; i++) {
    let curr = parseInt(numArr[i]);
    // We want to find the first biggest number that doesn't equal the current value
    max = curr + 1;

    // If there are no numbers after the current assumed max,
    // idx1 and idx2 will be the same.
    idx1 = i;
    idx2 = i;

    for (let j = i + 1; j < numArr.length; j++) {
      let next = parseInt(numArr[j]);
      // If we find a max, log its position and update max
      if (next >= max) {
        idx2 = j;
        max = next;
      }
    }

    // After first swap, we should have largest number
    if (idx1 !== idx2) break;
  }

  swap(numArr, idx1, idx2);
  return parseInt(numArr.join(''));
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
