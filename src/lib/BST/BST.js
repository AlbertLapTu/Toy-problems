const TreeNode = require('../lib/Tree/TreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.result = [];
  }

  /**
   *
   * @param {number} value
   * @description: Inserts a node into a BST
   */

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    }

    function insertInto(value, node) {
      if (value === node.val) return;

      if (value < node.val) {
        if (node.left === null) {
          node.left = new TreeNode(value);
          return;
        } else {
          insertInto(value, node.left);
        }
      } else {
        if (node.right === null) {
          node.right = new TreeNode(value);
          return;
        } else {
          insertInto(value, node.right);
        }
      }
    }

    insertInto(value, this.root);
  }

  /**
   * @description: Builds a BST given an an array. Array does not need to be sorted, as the sorting
   * operation will be taken care of on initialization.
   * @param {Array}: Array of integers
   *
   * @returns the root node of the BST
   */

  buildTree(array) {
    if (!Array.isArray(array)) {
      throw new Error('Provide a valid array argument');
    }

    if (!array.length) return null;

    const copy = array.slice().sort((a, b) => a - b);

    const midpoint = Math.floor(copy.length / 2);
    const node = new TreeNode(copy[midpoint]);

    if (this.root === null) {
      this.root = node;
    }

    node.left = this.buildTree(copy.slice(0, midpoint));
    node.right = this.buildTree(copy.slice(midpoint + 1));

    return node;
  }

  /**
   * @description: Logs each node in a BST as inorder traversal
   * @returns {void}
   */

  logInOrder(root) {
    if (!root) return null;

    this.logInOrder(root.left);
    console.log(root.val);
    this.result.push(root.val);
    this.logInOrder(root.right);

    return this.results;
  }

  /**
   * @description: Logs each node in a BST preorder traversal
   * @returns {void}
   */

  logPreOrder(root) {
    if (!root) return null;

    this.result.push(root.val);
    console.log(root.val);
    this.logPreOrder(root.left);
    this.logPreOrder(root.right);
  }

  /**
   * @description: Logs each node in a BST as postorder traversal
   * @returns {void}
   */

  logPostOrder(root) {
    if (!root) return null;

    this.logPostOrder(root.left);
    this.logPostOrder(root.right);
    console.log(root.val);
    this.result.push(root.val);
  }

  /**
   * @description: Logs each node in a BST as level order traversal'
   * @returns {void}
   */

  logLevelOrder(root) {
    const queue = [root];

    while (queue.length > 0) {
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        console.log(node.val);
        this.result.push(node.val);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    return this.result;
  }

  /**
   * @description: Searches the BST for a value that matches the second argument.
   * @returns {Boolean} True or false depending on if the node is found within the Tree
   */

  findNode(root, value) {
    if (!root) return null;

    if (root.val === value) {
      return true;
    }

    const left = this.findNode(root.left, value);
    const right = this.findNode(root.right, value);

    if (left) return true;
    if (right) return true;

    return false;
  }

  clearResults() {
    this.result = [];
  }
}

module.exports = BinarySearchTree;
