/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let rightNodes = [];
  if (!root) return rightNodes;
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      if (i === size - 1) {
        rightNodes.push(currentNode.val);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return rightNodes;
};
