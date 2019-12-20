const TreeNode = require('./TreeNode');

const Tree = {};

Tree.nodes = [];

/**
 * @description: Builds a BST given an an array. Array does not need to be sorted, as the sorting
 * operation will be taken care of on initialization.
 * @param {Array}: Array of integers
 *
 * @returns the root node of the BST
 */
Tree.buildTree = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Provide a valid array argument');
  }

  if (!array.length) return null;

  const copy = array.slice().sort((a, b) => a - b);

  const midpoint = Math.floor(copy.length / 2);
  const node = new TreeNode(copy[midpoint]);

  node.left = this.buildTree(copy.slice(0, midpoint));
  node.right = this.buildTree(copy.slice(midpoint + 1));

  return node;
};

/**
 * @description: Logs each node in a BST as inorder traversal
 * @returns {void}
 */
Tree.logInOrder = function(node) {
  if (!node) return null;

  this.logInOrder(node.left);
  console.log(node.val);
  this.logInOrder(node.right);
};

/**
 * @description: Logs each node in a BST preorder traversal
 * @returns {void}
 */
Tree.logPreOrder = function(node) {
  if (!node) return null;

  console.log(node.val);
  this.logPreOrder(node.left);
  this.logPreOrder(node.right);
};

/**
 * @description: Logs each node in a BST as postorder traversal
 * @returns {void}
 */
Tree.logPostOrder = function(node) {
  if (!node) return null;

  this.logPostOrder(node.left);
  this.logPostOrder(node.right);
  console.log(node.val);
};

/**
 * @description: Logs each node in a BST as level order traversal
 * @returns {void}
 */

Tree.logLevelOrder = function(node) {
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      console.log(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }
};

/**
 * @description: Searches the BST for a value that matches the second argument.
 * @returns {Boolean} True or false depending on if the node is found within the Tree
 */

Tree.findNode = function(node, value) {
  if (!node) return null;

  if (node.val === value) {
    return true;
  }

  const left = this.findNode(node.left, value);
  const right = this.findNode(node.right, value);

  if (left) return true;
  if (right) return true;

  return false;
};

module.exports = Tree;
