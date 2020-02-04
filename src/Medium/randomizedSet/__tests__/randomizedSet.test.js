const fn = require('../randomizedSet');

describe('[Insert title]', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should handle inserting, deleting and getRandom in average of O(1)', () => {
    const randomSet = new fn();

    expect(randomSet.insert(1)).toBe(true);
    expect(randomSet.remove(2)).toBe(false);
    expect(randomSet.insert(2)).toBe(true);
    expect(randomSet._arr).toHaveLength(2);
    expect(randomSet.remove(1)).toBe(true);
    expect(randomSet._arr).toHaveLength(1);
    expect(randomSet.insert(2)).toBe(false);
  });
});
