/*

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

*/

var spiralOrder = function(matrix) {
  if (!matrix.length) return [];

  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;
  let direction = 'right';
  let output = [];

  //Start from left to right
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let j = top; j <= bottom; j++) {
        output.push(matrix[j][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let k = right; k >= left; k--) {
        output.push(matrix[bottom][k]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let l = bottom; l >= top; l--) {
        output.push(matrix[l][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return output;
};
