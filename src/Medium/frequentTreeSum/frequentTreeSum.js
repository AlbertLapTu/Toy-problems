/*

Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const res = [];

  // Convert the tree with each node having the subsums of all subtrees
  convertTree(root);

  // Store all of the values into an array
  function traverse(node) {
    if (!node) return null;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  let hash = {};
  // Count the number of times each sum has appeared
  for (let i = 0; i < res.length; i++) {
    let sum = res[i];
    if (!hash[sum]) {
      hash[sum] = 1;
    } else {
      hash[sum]++;
    }
  }

  let appearances = 0;

  // Find the max number of appearances of a sum you have seen
  for (let key in hash) {
    if (hash[key] > appearances) {
      appearances = hash[key];
    }
  }
  // Find all values with the same amount of appearances that you've seen
  let output = [];
  for (let x in hash) {
    if (hash[x] === appearances) {
      output.push(x);
    }
  }

  return output;
};

// Finds the subtree sums at every treeNode
const findSum = (node, value) => {
  if (!node) return 0;

  let leftSub = findSum(node.left, value);
  let rightSub = findSum(node.right, value);

  return node.val + leftSub + rightSub;
};

const convertTree = (treeNode, val) => {
  if (!treeNode) return null;

  treeNode.val = findSum(treeNode, 0);
  convertTree(treeNode.left, (val += treeNode.val));
  convertTree(treeNode.right, (val += treeNode.val));
};

module.exports = findFrequentTreeSum;
