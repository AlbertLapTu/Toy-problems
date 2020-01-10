const fn = require('../getMinimumDifference');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('Minimum Absolute Difference in BST', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the smallest difference in a BST', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(2);

    expect(fn(root)).toBe(1);
  });
});
