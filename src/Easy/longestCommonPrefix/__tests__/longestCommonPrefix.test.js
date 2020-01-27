const fn = require('../longestCommonPrefix');

describe('Easy - Longest Common Prefix', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the longest common prefix', () => {
    const input1 = ['flower', 'flow', 'flight'];
    const input2 = ['spaceship', 'space', 'spacehits'];
    const input3 = ['alien', 'albert', 'altoids'];

    expect(fn(input1)).toBe('fl');
    expect(fn(input2)).toBe('space');
    expect(fn(input3)).toBe('al');
  });
});
