const BST = require('../BST');

describe('`BST - functions', () => {
  const BinarySearchTree = new BST();

  test('Has an insert function', () => {
    expect(typeof BinarySearchTree.insert).toBe('function');
  });

  test('Has a buildTree function', () => {
    expect(typeof BinarySearchTree.buildTree).toBe('function');
  });

  test('Has a findNode function', () => {
    expect(typeof BinarySearchTree.findNode).toBe('function');
  });

  test('Has inorder, preorder and postorder functions', () => {
    expect(typeof BinarySearchTree.logInOrder).toBe('function');
    expect(typeof BinarySearchTree.logPreOrder).toBe('function');
    expect(typeof BinarySearchTree.logPostOrder).toBe('function');
  });

  test('Function - clearResults should clear results', () => {
    const root = new BST();

    root.buildTree([-5, -10, 5, 1]);
    root.logInOrder(root.root);
    const inOrderNodes = root.result;

    expect(inOrderNodes).toHaveLength(4);

    root.clearResults();

    expect(root.result).toHaveLength(0);
  });
});
