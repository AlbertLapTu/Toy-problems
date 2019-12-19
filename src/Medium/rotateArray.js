/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*

Good exercise to do is to find each of the 4 corners to get familiar with how to access. 
We only want to iterate over half of the matrix, since we will be swapping as we go. Every swap 
will be n/2 - 1 more swaps that we need to do. We floor it in case we receive an odd length matrix. 

*/

const rotate = matrix => {
  if (!matrix.length) return matrix;
  const len = matrix.length;
  const end = len - 1;

  /**
   * Notes: If col = 0, it won't work. You need col to equal the row. This explains the weird syntax
   * to keep track of the topRight, and bottomLeft values.
   */
  for (let row = 0; row < Math.floor(len / 2); row++) {
    for (let col = 0; col < end - row; col++) {
      //Keep track of topLeft
      let currentNum = matrix[row][col];

      /*
      Easier way to keep track of in place swaps
      
      let topLeft = matrix[row][col];             //1
      
      Why not matrix[row][end-col]??
      let topRight = matrix[col][end-row];        //3
      
      let bottomRight = matrix[end-row][end-col]; //9
      
      WHy not matrix[end-row][col]? 
      let bottomLeft = matrix[end-col][row]       //7


      */

      //Change topLeft to bottomLeft
      matrix[row][col] = matrix[end - col][row];
      //Change bottomLeft to bottomRight
      matrix[end - col][row] = matrix[end - row][end - col];
      //Change bottomRight to topRight
      matrix[end - row][end - col] = matrix[col][end - row];
      //Change topRight to topLeft
      matrix[col][end - row] = currentNum;
    }
  }
  return matrix;
};
