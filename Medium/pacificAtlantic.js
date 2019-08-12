/*

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
 

Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  const result = [];
  if (!matrix || !matrix.length || !matrix[0].length) return result;

  const pacific = [];
  const atlantic = [];
  const height = matrix.length;
  const width = matrix[0].length;

  //Build T/F array tables
  for (let i = 0; i < height; i++) {
    let pacBool = [];
    let atlBool = [];
    for (let j = 0; j < width; j++) {
      pacBool.push(false);
      atlBool.push(false);
    }
    pacific.push(pacBool);
    atlantic.push(atlBool);
  }

  //On every value, call DFS function to see if current value can go all the way to the left and right
  // for (let row = 0; row < pacific.length; row++) {
  //   for (let col = 0; col < pacific.length; col++) {
  //     // Use negative number as height as all numbers on initial call will be greater
  //     dfsHelper(matrix, row, col, pacific, -1);
  //     dfsHelper(matrix, row, col, atlantic, -1);
  //   }
  // }
  // console.log(pacific, 'pacific');
  // // console.log(atlantic, 'atlantic');
};

const dfsHelper = (matrix, row, col, oceanVisited, height) => {
  if (row < 0 || col < 0 || row > matrix.length || col > matrix[row].length) {
    return;
  }

  let currentVal = matrix[row][col];
  if (currentVal > height) return false;

  const up = dfsHelper(matrix, row - 1, col, oceanVisited, currentVal);
  const right = dfsHelper(matrix, row, col + 1, oceanVisited, currentVal);
  const down = dfsHelper(matrix, row + 1, col, oceanVisited, currentVal);
  const left = dfsHelper(matrix, row, col - 1, oceanVisited, currentVal);

  return true;
};

pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]);
