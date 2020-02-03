const fn = require('../basicCalculator');

describe('Hard - 224. Basic Calculator', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should be able to calculate the given expression', () => {
    const input1 = '1 + 1';
    const input2 = ' 2-1 + 2';
    const input3 = '(1+(4+5+2)-3)+(6+8)';

    expect(fn(input1)).toBe(2);
    expect(fn(input2)).toBe(3);
    expect(fn(input3)).toBe(23);
  });
});
