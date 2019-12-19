/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let sortedA = A.map(item => Math.abs(item)).sort((a, b) => a - b);

  return sortedA.map(item => Math.pow(item, 2));
};
