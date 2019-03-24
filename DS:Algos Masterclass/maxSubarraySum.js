/**
 * Given an array and a number n, find the largest sum of the contiguous subarray. 
 * 
 * @param {array} arr
 * @param {int} num
 */

 const maxSubarraySum = (arr, num) => {
   let maxSum = 0;
   let tempSum = 0;

   //Sum together the first subarray
   for (let i = 0; i < i < num; i++) {
     maxSum += arr[i];
   }
   //Keep track of the total sum 
   tempSum = maxSum;

   //Remove the first element of the array, and add on the next element
   for (let i = num; i < arr.length; i++) {
     tempSum = tempSum - arr[i-num] + arr[i];
     maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum;
 }

 maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);

 /*
Example of sliding window
2 + 6 + 9 
6 + 9 + 2
9 + 2 + 1
*/