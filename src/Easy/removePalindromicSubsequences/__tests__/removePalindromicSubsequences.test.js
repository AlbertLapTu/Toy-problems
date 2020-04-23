const fn = require('../removePalindromicSubsequences');

describe('Easy - Remove Palindromic Subsequences', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return 1 if given a palindrome', () => {
    const input = 'racecar';

    expect(fn(input)).toBe(1);
  });

  test('Should return an empty string for an empty string', () => {
    const input = '';

    expect(fn(input)).toBe(input);
  });

  test('Should return the minimum number of moves to make string empty', () => {
    const input = 'abaabbbabb';

    expect(fn(input)).toBe(2);
  });
});
