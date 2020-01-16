/*

Given a non-empty special binary tree consisting of nodes with the non-negative value, 
where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, 
then this node's value is the smaller value among its two sub-nodes. More formally, 
the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of 
all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:

Input: 
    2
   / \
  2   5
     / \
    5   7

Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
 

Example 2:

Input: 
    2
   / \
  2   2

Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.

*/

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Time O(n) traversal + O(n log n) sort + O(n) last iteration
// 2O(n) + O(n log n) :(
// function secondMinNodeInBT(root) {
//   let output = [];

//   function traverse(node) {
//     if (!node) return null;
//     if (!node.left && !node.right) {
//       output.push(node.val);
//       return;
//     }

//     let min = Math.min(node.left.val, node.right.val);
//     output.push(min);
//     traverse(node.left);
//     traverse(node.right);
//   }

//   traverse(root);
//   // Now you have an array of values, where you need to find the second highest
//   let min = Math.min(...output);
//   output = output.sort((a, b) => a - b);
//   let nextMin = min;

//   for (let i = 0; i < output.length; i++) {
//     let curr = output[i];
//     if (curr > min) {
//       nextMin = curr;
//       break;
//     }
//   }

//   return nextMin === min ? -1 : nextMin;
// }

// Better solution O(n);
function secondMinNodeInBT(root) {
  let min = root.val;
  let res = Number.MAX_SAFE_INTEGER;

  function dfs(node) {
    if (!node) return;

    // If we havent found the min yet, keep traversing
    if (node.val === min) {
      dfs(node.left);
      dfs(node.right);
      // If we found the next greatest value
    } else if (node.val > min && node.val < res) {
      res = node.val;
    }
  }

  dfs(root);
  // If we havent found the next greater value, res will stay the same
  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
}

module.exports = secondMinNodeInBT;
