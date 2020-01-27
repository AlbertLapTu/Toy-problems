const fn = require('../eraseOverlapIntervals');

describe('435. Non-overlapping intervals', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the correct amount of deleted intervals', () => {
    const input1 = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ];
    const input2 = [
      [1, 2],
      [1, 2],
      [1, 2],
    ];
    expect(fn(input1)).toBe(1);
    expect(fn(input2)).toBe(2);
  });
});
