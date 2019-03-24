class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }

  insert(value, node) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      node = node || this.root;
      if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else {
          this.insert(value, node.right);
        }
      } else if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else {
          this.insert(value, node.left);
        }
      }
    }
    return this;
  }

  contains(value) {
    if (this.root === undefined) {
      return undefined;
    } else {
      if (this.root.value === value) {
        return true;
      }
    }
    if (this.root.value < value) {
      if (this.root.right !== null) {
        if (this.root.right.value === value) {
          return true;
        } else {
          find(this.root.right);
        }
      }
    } else {
      if (this.root.left !== null) {
        if (this.root.left.value === value) {
          return true;
        } else {
          find(this.root.left);
        }
      }
    }
    return false;
  }

  BFS() {
    let queue = [];
    let result = [];

    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length) {
      let queueNode = queue.shift();
      result.push(queueNode);

      if (queueNode.left) {
        queue.push(queueNode.left);
      }

      if (queueNode.right) {
        queue.push(queueNode.right);
      }
    }
    return result;
  }

  DFSPreoder() {
    let results = [];

    const traverse = node => {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      } else {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  DFSPostorder() {
    let results = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      } else {
        traverse(node.right);
      }
      results.push(node);
    };
    traverse(this.root);
    return results;
  }

  DFSInorder() {
    let results = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.right);

      if (node.right) {
        traverse(node.right);
      }
      traverse(this.root);
      return results;
    };
  }
}

/* BIG O 

Insertion/Searching - O(log n)

*/
