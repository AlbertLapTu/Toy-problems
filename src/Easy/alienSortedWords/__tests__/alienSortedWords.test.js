const fn = require('../alienSortedWords');

describe('isAlienSorted', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return the correct boolean value if the words are sorted in alien order', () => {
    const words1 = ['kuvp', 'q'];
    const order1 = 'ngxlkthsjuoqcpavbfdermiywz';

    const words2 = ['hello', 'leetcode'];
    const order2 = 'hlabcdefgijkmnopqrstuvwxyz';

    const words3 = ['word', 'world', 'row'];
    const order3 = 'worldabcefghijkmnpqstuvxyz';

    const words4 = ['apple', 'app'];
    const order4 = 'abcdefghijklmnopqrstuvwxyz';

    expect(fn(words1, order1)).toBeTruthy();
    expect(fn(words2, order2)).toBeTruthy();
    expect(fn(words3, order3)).toBe(false);
    expect(fn(words4, order4)).toBe(false);
  });
});
