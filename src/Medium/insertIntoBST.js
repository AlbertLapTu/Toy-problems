/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (val > root.val) {
    if (root.right === null) {
      root.right = new TreeNode(val);
      return root;
    } else {
      insertIntoBST(root.right, val);
    }
  } else {
    if (root.left === null) {
      root.left = new TreeNode(val);
      return root;
    } else {
      insertIntoBST(root.left, val);
    }
  }
  return root;
};
