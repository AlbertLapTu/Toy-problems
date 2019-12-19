/*

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. 
Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Analysis:

The problem calls for some type of iteration and swap, and given the input is an integer, some
housekeeping needs to be done with the input to let us work with it. 

Swapping values infers we need to keep track of the indices based off of the conditions that are set. 

Iterate over the number
  For the current number
    Assign max number that's one more than our current
    Keep track of indices
    Iterate over the rest of the numbers
      if the number[j] is greater than max
        Update max to number[j]
        Update second index
    
    If we found the index where we should swap, break;


Time complexity: (O^2)
Space: O(1). Maximum value input received will be 10^8, therefore mem. allocation of array length 10.
*/

const maximumSwap = num => {
  if (num === 0) return num;
  const numArr = num.toString().split('');
  let max, idx1, idx2;

  for (let i = 0; i < numArr.length; i++) {
    let current = Number(numArr[i]);
    max = current + 1;
    idx1 = i;
    idx2 = i; //We need to keep track of indices in case there is a tie in maximums.
    for (let j = i + 1; j < numArr.length; j++) {
      let next = Number(numArr[j]);
      if (next >= max) {
        max = next;
        idx2 = j;
      }
    }
    if (idx1 !== idx2) break;
  }

  swap(numArr, idx1, idx2);
  return Number(numArr.join(''));
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(maximumSwap(2736)); //7236
console.log(maximumSwap(3361)); //6331
console.log(maximumSwap(9973)); //9973
