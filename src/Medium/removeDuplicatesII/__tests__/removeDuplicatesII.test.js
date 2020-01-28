const fn = require('../removeDuplicatesII');

describe('Medium - Remove all adjacent duplicates in string II', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Expect the correct string after removing K adjacent duplicates', () => {
    const input1 = 'abcd';
    const freq1 = 2;
    const input2 = 'deeedbbcccbdaa';
    const freq2 = 3;
    const input3 = 'pbbcggttciiippooaais';
    const freq3 = 2;

    expect(fn(input1, freq1)).toBe('abcd');
    expect(fn(input2, freq2)).toBe('aa');
    expect(fn(input3, freq3)).toBe('ps');
  });
});
