/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the
* unique values in the array. There can be negative numbers in the array, but it will always be sorted
 */

 const countUniqueValues = (arr) => {
   let uniques = new Set(arr);

    return uniques.size;
 }

 countUniqueValues([1,1,1,1,1,2]) // Returns 2
 countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //Returns 7