/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative linked list
// O(n)
const reversedList = head => {
  let prev = null;
  let next = head.next;
  let current = head;

  if (!head) return head;

  while (next !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const reverseList = head => {};

// Initialize three pointers prev as NULL, curr as head and next as NULL.
// Iterate trough the linked list. In loop, do following.
// Before changing next of current,
// store next node
// next = curr->next
// Now change next of current
// This is where actual reversing happens
// curr->next = prev

// Move prev and curr one step forward
// prev = curr
// curr = next
