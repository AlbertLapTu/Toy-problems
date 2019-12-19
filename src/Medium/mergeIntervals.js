/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  //Sanity check
  if (!intervals.length) return intervals;
  /*
  If the first value's aren't the same, sort it by ascending start times. 
  If they are the same, sort it by end date. 
  */
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  //Keep track of the previous interval and place into result array
  let prev = intervals[0];
  let result = [prev];

  /*
  As we iterate through the array, check if the start date of our current
  element is less than or equal to the end time of the last element. 
    If it's equal or less than the previous, merge it.
    If it's not, add it to the array and move the previous meeting up. 
  */
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};
