const fn = require('../findShortestSubArray');

describe('697. Find degree of an array', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the shortest length of a subarray with the correct degree', () => {
    expect(fn([1, 2, 2, 3, 1])).toBe(2);
    expect(fn([1, 2, 2, 3, 1, 1])).toBe(6);
    expect(fn([])).toStrictEqual([]);
  });
});
