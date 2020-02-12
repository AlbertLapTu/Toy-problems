const fn = require('../LRUCache');

describe('Medium - 146 - LRU Cache', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should evict the least recently used item', () => {
    const LRU = new fn(2);

    LRU.put(1, 1);
    LRU.put(2, 2);

    expect(LRU.get(1)).toBe(1);

    LRU.put(3, 3);
    expect(LRU.get(2)).toBe(-1);

    LRU.put(4, 4);
    expect(LRU.get(1)).toBe(-1);

    expect(LRU.get(3)).toBe(3);
    expect(LRU.get(4)).toBe(4);
  });
});
