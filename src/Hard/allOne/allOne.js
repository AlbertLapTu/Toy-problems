/**
 * Initialize your data structure here.
 */
var AllOne = function() {
  this.hash = {};
  this._min = '';
  this._max = '';
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (this._min === '' && this._max === '') {
    this._min = key;
    this._max = key;
  }

  // If I get a current min as the value to increase/decrease
  // I need to update the min to the next min in O(1) time.

  if (!this.hash[key]) {
    this.hash[key] = 1;
  } else {
    this.hash[key]++;
  }

  let currentMinValue = this.hash[this._min];
  let proposedMinValue = this.hash[key];
  let currentMaxValue = this.hash[this._max];
  let proposedMaxValue = this.hash[key];

  if (proposedMinValue < currentMinValue) {
    this._min = key;
  }

  if (proposedMaxValue > currentMaxValue) {
    this._max = key;
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (this.hash[key] === 1) {
    if (this._min === key) {
      this._min = this._max;
    }
    delete this.hash[key];
  } else if (!(key in this.hash)) {
    return;
  } else {
    this.hash[key]--;
  }

  let newKeyVal = this.hash[key];

  if (newKeyVal < this.hash[this._min]) {
    this._min = key;
  }

  if (newKeyVal > this.hash[this._max]) {
    this._max = key;
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  return this._max;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  return this._min;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

module.exports = AllOne;
