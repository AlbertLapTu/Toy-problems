/*

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;
  let count = 0;

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [currStart, currEnd] = intervals[i];

    // If the last events end time overlaps the current event start time
    if (prevEnd > currStart) {
      // Take the minimum end time between the two
      prevEnd = Math.min(prevEnd, currEnd);
      // "delete" an event
      count++;
    } else {
      // If there is no overlap, update the end time
      prevEnd = currEnd;
    }
  }

  return count;
}

module.exports = eraseOverlapIntervals;
