/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements 
that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]


*/

var relativeSortArray = function(arr1, arr2) {
  let newArr = [];
  if (!arr1.length || !arr2.length) return newArr;

  for (let i = 0; i < arr2.length; i++) {
    let j = 0;
    while (j < arr1.length) {
      if (arr[j] === arr[i]) {
        newArr.push(arr[j]);
        arr1.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  if (arr1.length === 0) {
    return newArr;
  } else {
    let sorted = arr1.sort((a, b) => a - b);
    return [...newArr, ...sorted];
  }
  return -1;
};
