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

  test('Should produce the correct in/pre/post order traversals', () => {
    const root = new BST();

    root.buildTree([-5, 10, -2, 1, 3]);
    root.logInOrder(root.root);
    expect(root.result).toEqual(expect.arrayContaining([-5, -2, 1, 3, 10]));
    root.clearResults();

    root.buildTree([-5, 10, -2, 1, 3]);
    root.logPreOrder(root.root);
    expect(root.result).toEqual(expect.arrayContaining([1, -2, -5, 10, 3]));
    root.clearResults();

    root.buildTree([-5, 10, -2, 1, 3]);
    root.logPostOrder(root.root);
    expect(root.result).toEqual(expect.arrayContaining([1, -2, -5, 10, 3]));
    root.clearResults();
  });

  test('Should find a node if the node exists', () => {
    const root = new BST();
    root.buildTree([-5, 10, -2, 1, 3]);

    expect(root.findNode(root.root, 11)).toBe(false);
    expect(root.findNode(root.root, -2)).toBe(true);
  });
});
