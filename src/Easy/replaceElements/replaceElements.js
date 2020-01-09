/*

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function(arr) {
  if (!arr.length) return arr;

  for (let i = 0; i < arr.length; i++) {
    let greatest = 0;

    for (let j = i + 1; j < arr.length; j++) {
      greatest = Math.max(greatest, arr[j]);
    }

    arr[i] = greatest;
  }

  arr[arr.length - 1] = -1;
  return arr;
};

module.exports = replaceElements;
