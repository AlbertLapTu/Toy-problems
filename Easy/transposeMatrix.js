/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let results = [];

  if (A.length === 0) {
    return [];
  }

  for (let i = 0; i < A[0].length; i++) {
    let temp = [];
    for (let j = 0; j < A.length; j++) {
      temp.push(A[j][i]);
    }
    results.push(temp);
  }
  return results;
};
