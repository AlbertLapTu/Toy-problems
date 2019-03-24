/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/*

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.

The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].

I: Array of positive integers
O: A tree where nodes left nodes are all numbers left of the max value index. 
C: If array is 1
E: Do we just pull null values in the case of 

*/

var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  let maxNumber = Math.max(...nums);
  let maxIntIndex = nums.indexOf(Math.max(...nums));

  let Tree = new TreeNode(maxNumber);

  Tree.left = constructMaximumBinaryTree(nums.slice(0, maxIntIndex));
  Tree.right = constructMaximumBinaryTree(nums.slice(maxIntIndex + 1));
  return Tree;
};

//Check if input is valid
//Get max number of the array
//Get max number's index
//Instantiate new Tree
//Recurse left and recurse right
