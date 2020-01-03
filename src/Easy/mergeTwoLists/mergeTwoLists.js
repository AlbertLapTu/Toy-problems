/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes 
of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return;
  let dummyNode = new ListNode(3);
  let head = dummyNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      head = head.next;
      l1 = l1.next;
    } else {
      head.next = l2;
      head = head.next;
      l2 = l2.next;
    }
  }

  //When the while loop finishes, there will be one list that is exhausted.
  //point your current head to the truthy list
  head.next = l1 || l2;
  return dummyNode.next;
};
