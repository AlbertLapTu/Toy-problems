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
const sumNumbers = (root) => {
  if (!root) return 0;
  const output = [];

  dfs(root, '', output);
  return output.reduce((a, b) => a + b);
};

const dfs = (root, sb, output) => {
  if (!root) return null;
  sb = sb.concat(root.val);

  if (!root.left && !root.right) {
    output.push(parseInt(sb));
  }

  dfs(root.left, sb, output);
  dfs(root.right, sb, output);
};
