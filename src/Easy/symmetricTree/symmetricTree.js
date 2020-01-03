/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * Intuition: Recurse down the left/right side of the tree simultaneously and check nodes along the way.
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  return isMirror(root.left, root.right);
};

const isMirror = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.val !== node2.val) return false;

  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
};
