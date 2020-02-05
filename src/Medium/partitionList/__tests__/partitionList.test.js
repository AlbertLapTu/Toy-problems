const fn = require('../partitionList');
const ListNode = require('../../../lib/LinkedList/ListNode');
const helper = require('../../../util/helpers');

describe('86. Partition List', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('The LinkedList should be partitioned', () => {
    const root = new ListNode(1);
    const x = 3;
    root.next = new ListNode(4);
    root.next.next = new ListNode(3);
    root.next.next.next = new ListNode(2);
    root.next.next.next.next = new ListNode(5);
    root.next.next.next.next.next = new ListNode(2);

    let res = helper.convertLinkedListToArray(fn(root, x));

    expect(res).toHaveLength(6);
  });
});
