const fn = require('../sumEvenGrandparent');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('Medium - Sum of Nodes with Even-valued Grandparent', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should sum all even-valued grandparent', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(7);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(7);
    root.left.left.left = new TreeNode(9);
    root.left.right.left = new TreeNode(1);
    root.left.right.right = new TreeNode(4);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(5);

    expect(fn(root)).toBe(18);
  });
});
