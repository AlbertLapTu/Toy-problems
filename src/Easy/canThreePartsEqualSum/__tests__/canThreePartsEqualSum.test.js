const fn = require('../canThreePartsEqualSum');

describe('Easy - Partition array into equal parts sum', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('It should return a boolean if the array can be partitioned', () => {
    const input1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]; // true
    const input2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]; // false
    const input3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]; // true

    expect(fn(input1)).toBeTruthy();
    expect(fn(input2)).toBe(false);
    expect(fn(input3)).toBeTruthy();
  });
});
