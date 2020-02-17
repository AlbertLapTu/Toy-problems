const fn = require('../sortedLinkedListToBST');
const ListNode = require('../../../lib/LinkedList/ListNode');

describe('Medium - Convert sorted linked list to BST', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should build a new tree given a sorted linked list', () => {
    const root = new ListNode(-10);
    root.next = new ListNode(-3);
    root.next.next = new ListNode(0);
    root.next.next.next = new ListNode(5);
    root.next.next.next.next = new ListNode(9);
    root.next.next.next = new ListNode(11);

    const result = fn(root);

    expect(result.val).toBe(0);
    expect(result.left.val).toBe(-3);
    expect(result.right.val).toBe(11);
  });
});
