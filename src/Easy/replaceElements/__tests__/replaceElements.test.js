const fn = require('../replaceElements');

describe('Replace Elements with Greatest Element on Right Side', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('It should return the correct values', () => {
    const arr = [17, 18, 5, 4, 6, 1];
    const res = fn(arr);
    const expected = [18, 6, 6, 6, 1, -1];

    expect(expected).toEqual(expect.arrayContaining(res));
  });
});
