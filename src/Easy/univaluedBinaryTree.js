/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let valToCheck = root.val;
  let isUnival = true;

  const traverse = node => {
    if (!node) {
      return;
    }

    if (node.val !== valToCheck) {
      isUnival = false;
      return;
    }
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return isUnival;
};
