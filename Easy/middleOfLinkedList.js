/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.

  If there are two middle nodes, return the second middle node. 

  Input: [1,2,3,4,5]
  Output: Node 3 from this list (Serialization: [3,4,5])
  The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
  Note that we returned a ListNode object ans, such that:
  ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (!head) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let secondPointer = head;
  let size = 0;

  while (secondPointer !== null) {
    size++;
    if (secondPointer.next === null) {
      break;
    }
    secondPointer = secondPointer.next;
  }

  let midpoint = size % 2 === 0 ? size / 2 + 1 : Math.ceil(size / 2);
  let counter = 0;
  let returnedNode;

  while (head) {
    counter++;
    if (counter === midpoint) {
      returnedNode = head;
    }
    head = head.next;
  }
  return returnedNode;
};
