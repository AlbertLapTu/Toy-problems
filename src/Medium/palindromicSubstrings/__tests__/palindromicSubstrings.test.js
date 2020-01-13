const fn = require('../palindromicSubstrings');

describe('Palindromic Substrings', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the correct palindromic substrings given a valid string', () => {
    expect(fn('abc')).toBe(3);
    expect(fn('aaa')).toBe(6);
  });
});
