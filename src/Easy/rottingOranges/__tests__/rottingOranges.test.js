const fn = require('../rottingOranges');

describe('994. Rotting Oranges', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the amount of minutes to infect entire grid', () => {
    expect(
      fn([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ]),
    ).toBe(4);
    expect(
      fn([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ]),
    ).toBe(-1);
    expect(fn([0, 2])).toBe(0);
  });
});
