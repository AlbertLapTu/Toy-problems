const fn = require('../compareStringsByFreq');

describe('Easy - Compare strings by frequency', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('It should compare strings by lowest frequency', () => {
    const input1 = ['cbd'];
    const input2 = ['zaaaz'];

    expect(fn(input1, input2)[0]).toBe(1);
  });
});
