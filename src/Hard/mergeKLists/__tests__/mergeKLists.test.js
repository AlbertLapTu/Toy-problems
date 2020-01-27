const fn = require('../mergeKLists');
const ListNode = require('../../../lib/LinkedList/ListNode');
const helper = require('../../../util/helpers');

describe('Hard - Merge k sorted lists', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should merge k sorted linked list and return a single list', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);

    const list3 = new ListNode(2);
    list3.next = new ListNode(6);

    const lists = [list1, list2, list3];
    const res = helper.convertLinkedListToArray(fn(lists));
    const expected = [1, 1, 2, 3, 4, 4, 5, 6];

    for (let i = 0; i < res.length; i++) {
      expect(res[i]).toBe(expected[i]);
    }
  });
});
