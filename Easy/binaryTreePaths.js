/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let results = [];
  let paths = [];

  const traverseAndPrint = root => {
    if (root === null) {
      return null;
    }

    paths.push(root.val);

    let isLeaf = !root.left && !root.right;

    if (isLeaf) {
      results.push(paths.join('->'));
    } else {
      traverseAndPrint(root.left);
      traverseAndPrint(root.right);
    }

    paths.pop();
  };
  traverseAndPrint(root);
  return results;
};
