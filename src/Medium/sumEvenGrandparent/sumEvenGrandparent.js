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

function sumEvenGrandparent(root) {
  let sum = 0;

  function traverse(node, isEven = false) {
    if (!node) return 0;
    if (isEven) {
      if (node.left) {
        sum += node.left.val;
      }

      if (node.right) {
        sum += node.right.val;
      }
    }

    if (node.val % 2 === 0) {
      isEven = true;
    } else {
      isEven = false;
    }

    traverse(node.left, isEven);
    traverse(node.right, isEven);
  }

  traverse(root, false);
  return sum;
}

module.exports = sumEvenGrandparent;
