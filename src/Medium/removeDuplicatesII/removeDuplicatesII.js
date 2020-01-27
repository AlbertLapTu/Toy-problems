/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicatesII = function(s, k) {
  if (s.length < k) return s;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let top = stack[stack.length - 1];

    // Add if the top char doesnt equal current char
    if (stack.length === 0 || top.val !== curr) {
      stack.push(new Freq(curr, 1));
      // If the top char equals current
    } else {
      // Increment the amount of times its been seen
      let times = top.frequency;
      // If we see the max, "delete".
      if (top.frequency + 1 === k) {
        stack.pop();
      } else {
        // Otherwise, increment the top
        top.frequency++;
      }
    }
  }

  let res = '';
  for (let i = 0; i < stack.length; i++) {
    const { val, frequency } = stack[i];

    if (frequency === 0) {
      res += val;
    } else {
      res += val.repeat(frequency);
    }
  }

  return res;
};

class Freq {
  constructor(val, frequency) {
    this.val = val || 0;
    this.frequency = frequency || 0;
  }
}

module.exports = removeDuplicatesII;
