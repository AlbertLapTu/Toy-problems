/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let output = [];
  const traverse = root => {
    if (!root) return null;
    traverse(root.left);
    output.push(root.val);
    traverse(root.right);
  };

  traverse(root);
  let startingNode = new TreeNode(0);
  let currentNode = startingNode;

  for (let i = 0; i < output.length; i++) {
    currentNode.right = new TreeNode(output[i]);
    currentNode = currentNode.right;
  }
  return startingNode.right;
};

/*

Reminder of in-order depth first traversal

const traverse = root => {
if (!root) return null;
traverse(root.left);
console.log(root.val);
traverse(root.right);
}
traverse(this.root);

*/
