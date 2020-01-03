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

const isValidBST = (root) => validator(root);

const validator = (root, min = null, max = null) => {
  if (root === null) {
    return true;
  }
  if (min !== null && root.val <= min) {
    return false;
  }
  if (max !== null && root.val >= max) {
    return false;
  }

  return validator(root.left, min, root.val) && validator(root.right, root.val, max);
};
