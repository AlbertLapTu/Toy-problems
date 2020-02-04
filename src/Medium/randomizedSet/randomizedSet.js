/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this._hash = {};
  this._arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!(val in this._hash)) {
    this._hash[val] = this._arr.length;
    this._arr.push(val);
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!(val in this._hash)) {
    return false;
  } else {
    // Find the index of dupe entry
    let idx = this._hash[val];
    // hold reference to last index value
    let lastIdxVal = this._arr[this._arr.length - 1];

    // Add last index to the dupe values position
    this._arr[idx] = lastIdxVal;

    // Add the new entry to the end of the array for constant removal
    this._arr[this._arr.length - 1] = val;
    // Update hash on where last element used to be
    this._hash[lastIdxVal] = idx;

    this._arr.pop();
    delete this._hash[val];
    return true;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if (this._arr.length === 1) {
    return this._arr[0];
  }
  return this._arr[this.randomNumberOneToN(this._arr.length - 1)];
};

RandomizedSet.prototype.randomNumberOneToN = function(n) {
  return Math.floor(Math.random() * (n - 0 + 1)) + 0;
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedSet;
