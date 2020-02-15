const fn = require('../deepestLeavesSum');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('Medium - Deepest leaf tree sum', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the largest sum of deepest leaves', () => {
    const expected = 15;
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    root.right.right = new TreeNode(6);
    root.right.right.right = new TreeNode(8);

    root.left = new TreeNode(2);
    root.left.right = new TreeNode(5);
    root.left.left = new TreeNode(4);
    root.left.left.left = new TreeNode(7);

    const actual = fn(root);

    expect(actual).toBe(expected);
  });
});
