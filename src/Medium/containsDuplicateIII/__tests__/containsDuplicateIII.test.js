const fn = require('../containsDuplicateIII');

describe('Medium - Contains Duplicate III', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return true if conditions are met', () => {
    expect(fn([1, 2, 3, 1], 3, 0)).toBeTruthy();
    expect(fn([1, 0, 1, 1], 1, 2)).toBeTruthy();
    expect(fn([1, 5, 9, 1, 5, 9], 2, 3)).toBe(false);
  });
});
