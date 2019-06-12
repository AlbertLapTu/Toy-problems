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

/*

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4

Approach:

Big hint here is the time constraint of n log n. Immediately convert the linked list into a sorted array
to satisfy the n log n constraint. Construct a new linked list after iterating over the sorted array. 

UPDATE: This asks for constant space in which this solution does not satisfy. 

*/
var sortList = function(head) {
  let arr = [];
  let pointer = head;

  while (pointer) {
    arr.push(pointer.val);
    pointer = pointer.next;
  }

  arr = arr.sort((a, b) => a - b);
  let dummyNode = new ListNode(0);
  let newHead = dummyNode;

  for (let i = 0; i < arr.length; i++) {
    newHead.next = new ListNode(arr[i]);
    newHead = newHead.next;
  }

  return dummyNode.next;
};
