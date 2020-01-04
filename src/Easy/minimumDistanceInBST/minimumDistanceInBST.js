/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between 
the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3
 and node 2.

*/

var minDiffInBST = function(root) {
  const res = [];

  const traverse = (node) => {
    if (!node) return null;

    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < res.length - 1; i++) {
    let curr = res[i];
    let next = res[i + 1];

    if (Math.abs(curr - next) < min) {
      min = Math.abs(curr - next);
    }
  }
  return min;
};
