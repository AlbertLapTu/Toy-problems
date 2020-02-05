const ListNode = require('../../lib/LinkedList/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function partitionList(head, x) {
  let q = [];
  let y = [];

  let p = head;
  while (p) {
    if (p.val < x) {
      q.push(p.val);
    } else {
      y.push(p.val);
    }
    p = p.next;
  }

  // Iterate over the queue
  let dummy = new ListNode(0);
  let pointer = dummy;
  for (let i = 0; i < q.length; i++) {
    pointer.next = new ListNode(q[i]);
    pointer = pointer.next;
  }

  for (let j = 0; j < y.length; j++) {
    pointer.next = new ListNode(y[j]);
    pointer = pointer.next;
  }

  return dummy.next;
}

module.exports = partitionList;
