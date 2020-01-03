/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  //Two pointers. If either nodes are null, return null
  if (!headA || !headB) {
    return null;
  }

  let firstPointer = headA;
  let secondPointer = headB;

  while (firstPointer && secondPointer && firstPointer !== secondPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;

    if (firstPointer === secondPointer) {
      return firstPointer;
    }
    //If first pointer is null
    if (!firstPointer) {
      //Reset the first pointer to be the first position
      firstPointer = headA;
    }

    if (!secondPointer) {
      secondPointer = headB;
    }
  }
  return firstPointer;
};
