/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const findTarget = (root, k) => {
  let set = new Set();
  let validate = false;

  const traverse = root => {
    if (!root) return;

    traverse(root.left);

    if (set.has(k - root.val)) {
      validate = true;
      return;
    }
    set.add(root.val);
    traverse(root.right);
  };
  traverse(root);
  return validate;
};
