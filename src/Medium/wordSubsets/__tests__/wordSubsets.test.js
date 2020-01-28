const fn = require('../wordSubsets');

describe('Medium - Word Subsets', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return all universal words', () => {
    const A = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
    const B = ['e', 'o'];
    const C = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
    const D = ['l', 'e'];
    const E = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
    const F = ['e', 'oo'];

    const res1 = new Set(fn(A, B));
    const res2 = new Set(fn(C, D));
    const res3 = new Set(fn(E, F));

    expect(res1.has('facebook'));
    expect(res1.has('google'));
    expect(res1.has('leetcode'));
    expect(res1.size).toBe(3);

    expect(res2.has('facebook'));
    expect(res2.has('google'));
    expect(res2.has('apple'));
    expect(res2.size).toBe(3);

    expect(res3.has('facebook'));
    expect(res3.has('google'));
    expect(res3.size).toBe(2);
  });
});
