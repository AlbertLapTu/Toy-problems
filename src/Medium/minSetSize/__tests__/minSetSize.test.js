const fn = require('../minSetSize');

describe('Medium - Reduce Array Size to half', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should find the minimum moves to reduce an array to half', () => {
    const input1 = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
    const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const input3 = [1, 9];

    expect(fn(input1)).toBe(2);
    expect(fn(input2)).toBe(5);
    expect(fn(input3)).toBe(1);
  });
});
