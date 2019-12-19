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

/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:

                    1  
                  / |  \
                3   2   4
              /  \
            5      6

Return its postorder traversal as [5,6,3,2,4,1]

Note:

Recursive solution is trivial, could you do it iteratively?

*/

//Iterative
var postorder = function(root) {
  if (root === null) {
    return [];
  }
  let results = [];
  let stack = [root];

  while (stack.length > 0) {
    let currentNode = stack.pop();
    results.unshift(currentNode.val);

    if (!currentNode.children) {
      continue;
    }

    for (let i = 0; i < currentNode.children.length; i++) {
      stack.push(currentNode.children[i]);
    }
  }
  return results;
};

//Recursive

var postorder = function(root) {
  let results = [];

  const traverse = root => {
    if (root === null) {
      return;
    }

    root.children.forEach(node => traverse(node));
    results.push(root.val);
  };

  traverse(root);
  return results;
};

//Push the root into the stack immediately
//While the stack is full, pop the node off the stack, add value to results array
//Check if the currentRoot has any children
//If it has children, push the children into the stack
