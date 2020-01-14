const fn = require('../linkedListComponents');
const ListNode = require('../../../lib/LinkedList/ListNode');

describe('Linked list Components', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the correct amount of "connected" node components', () => {
    const root1 = new ListNode(0);
    root1.next = new ListNode(1);
    root1.next.next = new ListNode(2);
    root1.next.next.next = new ListNode(3);
    const group1 = [0, 1, 3];

    const root2 = new ListNode(0);
    root2.next = new ListNode(1);
    root2.next.next = new ListNode(2);
    root2.next.next.next = new ListNode(3);
    root2.next.next.next.next = new ListNode(4);
    const group2 = [0, 3, 1, 3];

    const root3 = new ListNode(0);
    root3.next = new ListNode(1);
    root3.next.next = new ListNode(2);
    root3.next.next.next = new ListNode(3);
    const group3 = [0, 1, 2, 3];

    expect(fn(root1, group1)).toBe(2);
    expect(fn(root2, group2)).toBe(2);
    expect(fn(root3, group3)).toBe(1);
  });
});
