/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes
p and q as the lowest node in T that has both p and q as descendants (where we allow a node to 
be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

*/

//Recursive solution
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  //If you find a match, return
  if (root === p || root === q) return root;

  //Store the ancestor if you find.
  //If no ancestor, left || right will be null
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  //If both are truthy, return the root
  if (left && right) return root;
  return left ? left : right;
};

//Iterative
var lowestCommonAncestor = function(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;

  let currentNode = root;

  while (currentNode) {
    const currentVal = currentNode.val;

    if (currentVal < pVal && currentVal < qVal) {
      currentNode = currentNode.right;
    } else if (currentVal > pVal && currentVal > qVal) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
};
