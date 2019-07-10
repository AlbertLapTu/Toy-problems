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
  const height = matrix.length - 1;
  const width = matrix[0].length - 1;

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

  //Iterate over pacific
  //Iterate over atlantic
};

const dfsHelper = (matrix, row, col, oceanVisited, height) => {
  if (row < 0 || col < 0 || row > matrix.length || col > matrix[row].length) return;
  let currentVal = matrix[row][col];

  if (currentVal > height) {
    return;
  } else {
    //Up right down left
    dfsHelper(matrix, row - 1, col, oceanVisited, currentVal);
    dfsHelper(matrix, row, col + 1, oceanVisited, currentVal);
    dfsHelper(matrix, row + 1, col, oceanVisited, currentVal);
    dfsHelper(matrix, row, col - 1, oceanVisited, currentVal);
  }
};

pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]);
