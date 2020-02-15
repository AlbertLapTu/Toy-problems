/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function(root) {
  const deepest = findDepth(root, 0) - 1;
  let sum = 0;

  const traverse = (node, depth) => {
    if (!node) return;
    let isLeaf = !node.left && !node.right;

    if (isLeaf && depth === deepest) {
      sum += node.val;
    }

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };

  traverse(root, 0);
  return sum;
};

function findDepth(tree) {
  if (!tree) return null;

  let left = findDepth(tree.left) + 1;
  let right = findDepth(tree.right) + 1;

  return Math.max(left, right);
}

module.exports = deepestLeavesSum;
