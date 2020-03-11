const fn = require('../findBottomLeftValue');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('513. Find Bottom left tree value', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should find the most bottom left tree value', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(4);

    root.right = new TreeNode(3);
    root.right.right = new TreeNode(6);
    root.right.left = new TreeNode(5);
    root.right.left.left = new TreeNode(7);

    expect(fn(root)).toBe(7);
  });

  test('Should return the first right TreeNode given no left nodes', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(-1);

    expect(fn(root)).toBe(-1);
  });
});
