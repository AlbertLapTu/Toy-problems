const fn = require('../secondMinNodeInBT');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('671. Second Min Node in Binary Tree', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the second minimum node in a valid BT', () => {
    const root1 = new TreeNode(2);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(5);
    root1.right.right = new TreeNode(7);
    root1.right.left = new TreeNode(5);

    const root2 = new TreeNode(2);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);

    expect(fn(root1)).toBe(5);
    expect(fn(root2)).toBe(-1);
  });
});
