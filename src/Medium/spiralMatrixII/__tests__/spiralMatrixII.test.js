const fn = require('../spiralMatrixII');

describe('59 - Medium - Spiral Matrix II', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return a spiral matrix filled with elements from 1 to n^2', () => {
    const res = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const actual = fn(3);

    for (let i = 0; i < actual.length; i++) {
      for (let j = 0; j < actual[i].length; j++) {
        const num = actual[i][j];
        expect(res.has(num)).toBeTruthy();
      }
    }
  });
});
