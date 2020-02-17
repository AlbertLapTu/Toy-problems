const TreeNode = require('../../lib/BST/TreeNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function sortedLinkedListToBST(head) {
  if (!head) return null;
  const list = [];
  let p = head;

  while (p) {
    list.push(p.val);
    p = p.next;
  }

  function buildTree(arr) {
    if (!arr.length) {
      return null;
    }

    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);

    node.left = buildTree(arr.slice(0, mid));
    node.right = buildTree(arr.slice(mid + 1));

    return node;
  }

  return buildTree(list);
}

module.exports = sortedLinkedListToBST;
