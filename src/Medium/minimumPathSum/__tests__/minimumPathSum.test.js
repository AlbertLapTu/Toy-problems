const fn = require('../minimumPathSum');

describe('64. Minimum Path Sum', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the smallest path', () => {
    const testCase1 = [
      [1, 3, 1, 5],
      [1, 5, 1, 6],
      [4, 2, 1, 10],
    ]; // 17
    const testCase2 = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]; //13

    expect(fn(testCase1)).toBe(17);
    expect(fn(testCase2)).toBe(13);
    expect(fn([])).toHaveLength(0);
  });
});
