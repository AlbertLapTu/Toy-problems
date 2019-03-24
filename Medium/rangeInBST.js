/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 *
 *
 * Example:
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 * Output: 32
 *
 *               10
 *             /   \
 *           5       15
 *         /  \     /   \
 *       3     7  null   18
 */
var rangeSumBST = function(root, L, R) {
  if (root === null) {
    return 0;
  }

  if (root.val <= R && root.val >= L) {
    return (
      root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
    );
  } else if (root.val > R) {
    return rangeSumBST(root.left, L, R);
  } else {
    return rangeSumBST(root.right, L, R);
  }
};

/*
Behavior: 
  Check if root exists
    Check if rootnode is within range of L && R (inclusive)
      If within range, add that node to the current value
        If it's greater tha Right range
          Recurse left
        If it's greater than the left range
          Recurse right

*/
