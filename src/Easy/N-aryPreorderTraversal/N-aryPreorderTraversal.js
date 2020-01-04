/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

//Recursive
var preorder = function(root, results = []) {
  if (!root.children) {
    return results;
  }
  results.push(root.val);

  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], results);
  }
  return results;
};
