/*

Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  if (n === 1) return [0];
  const res = [];

  // Add a number in, then also add an offset
  while (n > 0) {
    res.push(n);
    res.push(-n);

    n -= 2;

    // If we start with an odd n, there will always be 1 value left,
    // so push a 0 in
    if (n === 1) {
      res.push(0);
      break;
    }
  }
  return res;
};
