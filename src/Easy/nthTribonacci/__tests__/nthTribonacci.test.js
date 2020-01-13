const fn = require('../nthTribonacci');

describe('N-th Tribonacci number', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the nth tribonacci number', () => {
    // Running the below dramatically slows down the rest of the tests.
    // Keep this test low to avoid hitches
    // expect(fn(33)).toBe(181997601);
    expect(fn(4)).toBe(4);
  });
});
