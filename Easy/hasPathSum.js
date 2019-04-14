/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;

  let subSum = sum - root.val;

  if (subSum === 0 && root.left === null && root.right === null) {
    return true;
  }

  let left = hasPathSum(root.left, subSum);
  let right = hasPathSum(root.right, subSum);

  return left || right;
};
