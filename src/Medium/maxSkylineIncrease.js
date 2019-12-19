/*
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount 
 (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, 
i.e. top, bottom, left, and right, must be the same as the skyline of the original grid.
 A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. 
 
 ee the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]


*/

var maxIncreaseKeepingSkyline = function(grid) {
  let topDown = new Array(grid.length).fill(Number.MIN_SAFE_INTEGER);
  let leftRight = new Array(grid.length).fill(Number.MIN_SAFE_INTEGER);
  let max = 0;

  // Iterate from top to bottom
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      topDown[row] = Math.max(topDown[row], grid[col][row]);
    }
  }

  //Iterate from left to right
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      leftRight[row] = Math.max(leftRight[row], grid[row][col]);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const maxHeight = Math.min(topDown[col], leftRight[row]);
      if (maxHeight > grid[row][col]) {
        max += maxHeight - grid[row][col];
      } else {
        max += 0;
      }
    }
  }
  return max;
};
