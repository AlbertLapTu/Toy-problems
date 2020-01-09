/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
  if (!grid.length) return [];

  let width = grid[0].length;
  let height = grid.length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // For values where it takes more than one step to get to
      if (i !== 0 && j !== 0) {
        // Find the minimum of the top, or the left
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        // If we arent at the beginnig column
      } else if (j !== 0) {
        // Add the value to the left
        grid[i][j] += grid[i][j - 1];
        // If we arent at the beginning row
      } else if (i !== 0) {
        // Add the top value
        grid[i][j] += grid[i - 1][j];
      }
    }
  }
  return grid[height - 1][width - 1];
};

module.exports = minPathSum;
