const Tree = require('./Tree');

describe('Tree - functions', () => {
  let root;

  beforeAll(() => {
    root = Tree.buildTree([-3, -5, 1, 5, 7, -10]);
  });

  test('Tree - findNode function', () => {
    expect(Tree).toHaveProperty('findNode');
    expect(Tree.findNode(root, 1)).toBe(true);
    expect(Tree.findNode(root, 10)).toBe(false);
  });

  test('Tree - buildTree function', () => {
    const root = Tree.buildTree([-3, -5, 1, 5, 7, -10]);

    expect(Tree).toHaveProperty('buildTree');
  });

  test('Tree - traversal functions', () => {
    expect(Tree).toHaveProperty('logInOrder');
    expect(Tree).toHaveProperty('logPostOrder');
    expect(Tree).toHaveProperty('logPreOrder');
  });
});
