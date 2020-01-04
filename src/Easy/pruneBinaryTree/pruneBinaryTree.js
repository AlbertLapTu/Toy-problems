/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 *  We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

    Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

    (Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

    Example 1:
    Input: [1,null,0,0,1]
    Output: [1,null,0,null,1]
    
    Explanation: 
    Only the red nodes satisfy the property "every subtree not containing a 1".
    The diagram on the right represents the answer.


    1                           1
     \                           \
      0          ====>             0
    / \                             \
   0    1                             1 




               1                                     1
            /    \                                    \
          0        1            ===>                    1
        /  \      /  \                                   \
       0    0    0     1                                   1
 * 
 * 
 * 
 * TODO: 
 * 
 * 
 */
var pruneTree = function(root) {
  if (root === null) {
    return null;
  }

  //DFS Recurse
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  //Check if node is a 1
  //If node !== 1, return null
  let isLeaf = !root.left && !root.right;
  if (isLeaf && root.val !== 1) {
    return null;
  }

  return root;
};
