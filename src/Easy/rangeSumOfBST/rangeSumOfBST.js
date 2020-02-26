/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if (!root.val) return 0;
  let total = 0;

  const shell = (root) => {
    if (!root) return null;

    if (root.val <= R && root.val >= L) {
      total += root.val;
    }
  };

  shell(root.left);
  shell(root.right);

  return total;
};

module.exports = rangeSumBST;
