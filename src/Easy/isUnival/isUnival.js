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
const isUnivalTree = (root) => {
  let value = root.val;
  let isUnival = true;

  if (root === null) {
    return null;
  }
  let queue = [root];

  while (queue.length > 0) {
    let firstItem = queue.shift();

    if (firstItem.val !== value) {
      isUnival = false;
    }

    if (firstItem.left) {
      queue.push(firstItem.left);
    }

    if (firstItem.right) {
      queue.push(firstItem.right);
    }
  }
  return isUnival;
};
