/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flattenBTtoLL = function(root) {
  const flattenTree = (node) => {
    if (!node) return node;
    //Postorder traversal
    let left = flattenTree(node.left);
    let right = flattenTree(node.right);

    // When the node is 3
    // Node doesnt have a left
    // So return the right, since its the next node in preorder
    // If there isnt a right, return the node
    if (!left) {
      return right ? right : node;
    }

    // Once we return the node, our node is 2.
    // Set 2's left node(3).right value to be the 2's current right
    left.right = node.right;
    // set two's right value to be two's left
    node.right = node.left;
    // chop off the left
    node.left = null;
    // return the new tree back up
    return right ? right : left;
  };

  flattenTree(root);
};

module.exports = flattenBTtoLL;
