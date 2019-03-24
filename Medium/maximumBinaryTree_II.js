/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
 * 
 * 
 * We are given the root node of a maximum tree: a tree where every node has a value greater than any other value in its subtree.

Just as in the previous problem, the given tree was constructed from an list A (root = Construct(A)) recursively with the following Construct(A) routine:

If A is empty, return null.
Otherwise, let A[i] be the largest element of A.  Create a root node with value A[i].
The left child of root will be Construct([A[0], A[1], ..., A[i-1]])
The right child of root will be Construct([A[i+1], A[i+2], ..., A[A.length - 1]])
Return root.


Note that we were not given A directly, only a root node root = Construct(A).

Suppose B is a copy of A with the value val appended to it.  It is guaranteed that B has unique values.

Return Construct(B).
            Given:  val: 4                              Output:
                5                                         5
              /   \                                     /   \
            2       3                                 2       4
             \                                         \       \
              1                                         1       3


 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoMaxTree = (root, val) => {
  if (root && root.val > val) {
    root.right = insertIntoMaxTree(root.right, val);
    return root;
  }

  let newNode = new TreeNode(val);
  newNode.left = root;
  return newNode;
};
