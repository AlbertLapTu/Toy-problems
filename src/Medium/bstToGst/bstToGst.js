/*


Given the root of a binary search tree with distinct values, modify it so that every node has a new 
value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/

// O(n) time, O(1) space
var bstToGst = function(root) {
  const getSum = (node, sum) => {
    if (!node) return sum;

    node.val += getSum(node.right, sum);

    return getSum(node.left, node.val);
  };

  getSum(root, 0);

  return root;
};

/**
 * @description: Initially, it's temping to find the entire sum of the tree using a helper method. In
 * reality, you can just traverse to the largest value of the tree. Take that number, and pass it back
 * up the tree
 * @param {TreeNode} root
 */
// O(n) time, O(1) space. Somewhat more readable
function bstToGst(root) {
  let sum = 0;

  const traverse = (node) => {
    if (!node) return;
    traverse(node.right);

    sum += node.val;

    node.val = sum;
    traverse(node.left);
  };

  traverse(root);
  return root;
}

// Tree sum helper
function bstSumHelper(node) {
  if (!node) return 0;

  return node.val + bstSumHelper(node.left) + bstSumHelper(node.right);
}
