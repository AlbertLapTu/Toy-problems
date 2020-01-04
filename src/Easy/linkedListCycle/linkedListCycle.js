/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let pointer_a = head;
  let pointer_b = head.next;

  while (pointer_b.next && pointer_b.next.next) {
    pointer_a = pointer_a.next;
    pointer_b = pointer_b.next.next;

    if (pointer_a === pointer_b) {
      return true;
    }
  }
  return false;
};
