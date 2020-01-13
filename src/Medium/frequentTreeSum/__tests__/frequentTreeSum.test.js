const fn = require('../frequentTreeSum');
const TreeNode = require('../../../lib/BST/TreeNode');

describe('Most Frequent Subtree Sum', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the most frequent subtree sum', () => {
    const root1 = new TreeNode(5);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(-3);

    const root2 = new TreeNode(5);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(-5);

    expect(fn(root1)).toEqual(expect.arrayContaining(['2', '4', '-3']));
    expect(fn(root1)).toHaveLength(3);
    expect(fn(root2)).toHaveLength(1);
  });
});
