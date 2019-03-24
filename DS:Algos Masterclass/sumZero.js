// Naive solution (On^2)

/**
 *
 * @param {array} arr
 * Write a function called sumZero which accepts a sorted array of ints. The function should find the first pair where the sum
 * is 0. Return an arr that includes both values that sum to zeor or udnefined if a pair does not exist.
 */

//Brute force
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

/*
Optimized
One pointer at -4 (it's the smallest in array), another point at 5
  Check if 5 + -4 = 0. No, 1 is > 0 move the pointer from the 5 down to 2
  Check if -4 + 2 === 0. -2 is less than 0, move pointer to -3.
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
