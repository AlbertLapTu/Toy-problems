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
var averageOfLevels = function(root) {
  let hash = {};

  traverse(root, hash, 0);

  for (level in hash) {
    hash[level] = findAvg(hash[level], hash[level].length);
  }

  return Object.values(hash);
};

const traverse = (node, hash, level) => {
  if (!node) return null;

  if (!hash[level]) {
    hash[level] = [node.val];
  } else {
    hash[level].push(node.val);
  }

  traverse(node.left, hash, level + 1);
  traverse(node.right, hash, level + 1);
};

const findAvg = (arr, n) => {
  return arr.reduce((a, b) => a + b) / n;
};
