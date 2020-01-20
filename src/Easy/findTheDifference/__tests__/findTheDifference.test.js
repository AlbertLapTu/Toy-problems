const fn = require('../findTheDifference');

describe('389. Find the difference', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should find the difference between two strings', () => {
    expect(fn('abcd', 'abcde')).toBe('e');
    expect(fn('abcdefg', 'abcdefgh')).toBe('h');
  });
});
