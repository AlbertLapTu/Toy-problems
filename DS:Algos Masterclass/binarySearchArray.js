/**
 * 
 * @param {array} arr
 * @param {integer} target 
 * 
 * Binary Search Array
Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. 
The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, 
then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value,
 then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or 
 the search interval is empty.

Note:
Your function should return -1 for target values not in the array. 

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?


Parameters:

array (required) - an array.

target (required) - an integer value.

Examples

array: [ 5 ]
target: 4 
output: -1

array: [ 11, 12, 13, 14, 15 ]
target: 11
output: 0

array: [ 11, 12, 13, 14, 15 ]
target: 12
output: 1

array: [ 11, 12, 13, 14, 15 ]
target: 13
output: 2

array: [ 11, 12, 13, 14, 15 ]
target: 14
output: 3

array: [ 11, 12, 13, 14, 15 ]
target: 15
output: 4

array: [ 11, 12, 13, 14, 15 ]
target: 16
output: -1
 */

//TRUE BINARY SEARCH

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length-1;
  let midpoint = Math.floor((start+end)/2);

  while (arr[midpoint] !== elem && start <= end) {
    if (elem < arr[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
      midpoint = Math.floor((start+end)/2);
    }
  }
  return arr[midpoint] === elem ? midpoint : - 1;
}

