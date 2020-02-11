const fn = require('../allOne');

describe('[Insert title]', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  // Havent figured out edge cases of conflicing min/max
  test.skip('Should return the min max in O(1) time ', () => {
    const allOne = new fn();

    allOne.inc('a');
    allOne.inc('b');
    allOne.inc('c');
    allOne.inc('c');

    expect(allOne.getMinKey()).toBe('a');
    expect(allOne.getMaxKey()).toBe('c');
  });
});
