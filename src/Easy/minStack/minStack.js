/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
  this._top = null;
  this._min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.unshift(x);

  if (this._stack.length > 0) {
    this._top = this._stack[0];
    this._min = Math.min(this._min, x);
  }

  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let temp = this._stack.shift();
  this._top = this._stack[0];

  this._min = Math.min(...this._stack);

  return temp;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
