/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let output = [];
  traverse(root, 0, output);

  output = output.map((el, idx) => {
    return idx % 2 !== 0 ? el.reverse() : el;
  });

  return output;
};

const traverse = (node, level, output) => {
  if (!node) return null;
  let levelHolder = [];

  if (!output[level]) {
    output[level] = [node.val];
  } else {
    output[level].push(node.val);
  }

  traverse(node.left, level + 1, output);
  traverse(node.right, level + 1, output);
};
