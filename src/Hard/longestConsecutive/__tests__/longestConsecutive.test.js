const fn = require('../longestConsecutive');

describe('Hard - 128. Longest Consecutive Sequence', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the longest consecutive subsequence', () => {
    const input1 = [100, 4, 200, 1, 3, 2];
    const input2 = [150, 200, 2, 1, 4, 5, 3];
    const input3 = [999, 1000, 2, 5, 1001];

    expect(fn(input1)).toBe(4);
    expect(fn(input2)).toBe(5);
    expect(fn(input3)).tobe(3);
  });
});
