const helper = {};

/**
 * @param {List} list - A linkedList
 */
helper.convertLinkedListToArray = function(list) {
  let res = [];

  let pointer = list;
  while (pointer) {
    res.push(pointer.val);
    pointer = pointer.next;
  }

  return res;
};

module.exports = helper;
