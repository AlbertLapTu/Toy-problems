const fn = require('../minStepsForTwoAnagrams');

describe('Medium - Minimum number of steps to make two strings anagrams', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the minimum changes for strings that are three characters', () => {
    const stringOne = 'bab';
    const stringTwo = 'aba';

    expect(fn(stringOne, stringTwo)).toBe(1);
  });

  test('Should return the minimum changes for strings that are of any character length', () => {
    const stringOne = 'leetcode';
    const stringTwo = 'practice';

    expect(fn(stringOne, stringTwo)).toBe(5);
  });

  test('Should return 0 if both strings are already anagrams', () => {
    const stringOne = 'xxyyzz';
    const stringTwo = 'xxyyzz';
    const s = 'anagram';
    const t = 'mangaar';

    expect(fn(stringOne, stringTwo)).toBe(0);
    expect(fn(s, t)).toBe(0);
  });
});
