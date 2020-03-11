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

function findBottomLeftValue(root) {
  if (!root.left && !root.right) {
    return root.val;
  }

  let levelBeforeMax = findDepth(root, 0) - 1;
  let queue = [];

  const traverse = (node, level) => {
    if (!node) return null;
    if (level === levelBeforeMax) {
      if (node.left) {
        queue.push(node.left.val);
      }

      if (node.right) {
        queue.push(node.right.val);
      }
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 1);
  return queue[0];
}

function findDepth(node, level) {
  if (!node) return 0;

  let left = findDepth(node.left, level) + 1;
  let right = findDepth(node.right, level) + 1;

  return Math.max(left, right);
}

module.exports = findBottomLeftValue;
