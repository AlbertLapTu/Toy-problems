const fn = require('../maxProductOfWordLengths');

describe('[Insert title]', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the maximum product of word lengths', () => {
    const input1 = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
    const input2 = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'];
    const input3 = ['a', 'aa', 'aaa', 'aaaa'];

    expect(fn(input1)).toBe(16);
    expect(fn(input2)).toBe(4);
    expect(fn(input3)).toBe(0);
  });
});
