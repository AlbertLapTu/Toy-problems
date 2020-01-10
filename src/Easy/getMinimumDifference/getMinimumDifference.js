/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

*/

function getMinimumDifference(root) {
  let res = [];

  const traverse = (node) => {
    if (!node) return null;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < res.length - 1; i++) {
    min = Math.min(min, Math.abs(res[i] - res[i + 1]));
  }

  return min;
}

module.exports = getMinimumDifference;
