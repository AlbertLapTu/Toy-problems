/*

We are given head, the head node of a linked list containing unique integer values.

We are also given the list G, a subset of the values in the linked list.

Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

Example 1:

Input: 
head: 0->1->2->3
G = [0, 1, 3]
Output: 2
Explanation: 
0 and 1 are connected, so [0, 1] and [3] are the two connected components.
Example 2:

Input: 
head: 0->1->2->3->4
G = [0, 3, 1, 4]
Output: 2
Explanation: 
0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.

*/

/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */

function linkedListComponents(head, G) {
  const groupSet = new Set(G);
  let count = 0;

  while (head) {
    // If the group has my current value and if it doesnt have the next value
    if (groupSet.has(head.val) && (head.next === null || !groupSet.has(head.next.val))) {
      // We have found a "connected" component, or the "tail" of a connected component
      count++;
    }

    // If the above never triggers, then the current node isnt in the group
    head = head.next;
  }

  return count;
}

module.exports = linkedListComponents;
