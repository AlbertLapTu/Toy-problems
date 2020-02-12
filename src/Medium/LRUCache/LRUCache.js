/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  // Move the value to the front by deleting and re-adding
  const previousValue = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, previousValue);

  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // Delete the key, and re-add later
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }

  this.cache.set(key, value);

  const cacheSize = this.cache.size;
  const capacity = this.capacity;

  // Evict the first least used value (in this implementation, it will always be first value);
  if (cacheSize > capacity) {
    // Map.prototype.keys() returns an iterable map. If you call .next()
    // on the map, it returns the first value you inserted as an object { value, done }
    const firstValue = this.cache.keys().next().value;
    this.cache.delete(firstValue);
  }
};

module.exports = LRUCache;
