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
var BSTIterator = function(root) {
  this.root = root;
  this.inOrder = this.initialize();
  this.startingPointer = this.inOrder.length - 1;
};

BSTIterator.prototype.initialize = function() {
  const res = [];

  const collect = (node) => {
    if (!node) return null;

    collect(node.right);
    res.push(node.val);
    collect(node.left);
  };

  collect(this.root);
  return res;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.startingPointer--;
  return this.inOrder.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  if (this.inOrder[this.startingPointer] !== undefined) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

module.exports = BSTIterator;
