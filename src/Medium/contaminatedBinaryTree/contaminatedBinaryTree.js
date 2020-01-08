/*

Given a binary tree with the following rules:

root.val == 0
If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

You need to first recover the binary tree and then implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
bool find(int target) Return if the target value exists in the recovered binary tree.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  this.root = root;
  this.decontaminate(this.root, 0);
};

/**
 * @param {number} target
 * @return {boolean}
 */

FindElements.prototype.decontaminate = function(node, val) {
  if (!node) return;
  // Initial call will be on the root element, so change to 0
  node.val = val;
  this.decontaminate(node.left, 2 * val + 1);
  this.decontaminate(node.right, 2 * val + 2);
};

FindElements.prototype.find = function(target) {
  function traverse(node, target) {
    if (node === null) return false;
    if (node.val > target) return false;
    if (node.val === target) return true;

    return traverse(node.left, target) || traverse(node.right, target);
  }

  return traverse(this.root, target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
