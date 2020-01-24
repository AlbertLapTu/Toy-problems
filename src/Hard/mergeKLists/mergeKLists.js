const MinHeap = require('../../lib/MinHeap/MinHeap');
const ListNode = require('../../lib/LinkedList/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeKLists(list) {
  const minHeap = new MinHeap();
  let res = [];

  for (let i = 0; i < list.length; i++) {
    let head = list[i];
    while (head) {
      minHeap.insert(head.val);
      head = head.next;
    }
  }

  while (minHeap._heap.length > 0) {
    res.push(minHeap.extractMin());
  }

  let dummyNode = new ListNode(0);
  let pointer = dummyNode;

  for (let i = 0; i < res.length; i++) {
    let newNode = new ListNode(res[i]);
    pointer.next = newNode;
    pointer = pointer.next;
  }
  return dummyNode.next;
}

module.exports = mergeKLists;
