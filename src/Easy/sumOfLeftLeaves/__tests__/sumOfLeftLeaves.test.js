const fn = require('../sumOfLeftLeaves');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('404. Sum of Left Leaves', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the sum of all left leaves', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.left = new TreeNode(4);
    root1.left.right = new TreeNode(5);

    expect(fn(root)).toBe(24);
    expect(fn(root1)).toBe(4);
  });
});
