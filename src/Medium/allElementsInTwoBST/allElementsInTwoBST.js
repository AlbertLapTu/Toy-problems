/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

// Attempt #1
var getAllElements = function(root1, root2) {
  const res = [];

  function helper(root) {
    if (!root) return null;

    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }

  helper(root1);
  helper(root2);

  return res.sort((a, b) => a - b);
};

// Attempt # 2
function allElementsInTwoBST(root1, root2) {
  const arr1 = [];
  const arr2 = [];

  function helper(root, arr) {
    if (!root) return;

    helper(root.left, arr);
    arr.push(root.val);
    helper(root.right, arr);
  }

  helper(root1, arr1);
  helper(root2, arr2);

  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  const sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sorted.push(...arr1.splice(0, 1));
    } else {
      sorted.push(...arr2.splice(0, 1));
    }
  }

  while (arr1.length) {
    sorted.push(arr1.shift());
  }

  while (arr2.length) {
    sorted.push(arr2.shift());
  }

  return sorted;
}

module.exports = allElementsInTwoBST;
