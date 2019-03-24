/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let queue = [root];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let currentNode = queue.shift();
      queue.push(...currentNode.children);
    }
    depth++;
  }
  return depth;
};
