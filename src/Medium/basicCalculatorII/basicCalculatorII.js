/**
 * @param {string} s
 * @return {number}
 *
 *
 *
 * Intuition: Preprocess by trimming + filtering out all white space.  Recursively modify
 * the input string to follow PEMDAS rule. Evaluate multiplication, pass in the new string into the new recursive call,
 * evaluate division etc...
 *
 * Time: O(n^2)
 * Space: O(n)
 *
 * Solution: Use a stack to temporarily keep track of the numbers, and use another variable to keep track of
 * the number. If you run into a situation where you hit an operator, push the num you were holding onto into
 * the stack, while applying the current operator value to that number.
 *
 * Sum up the stack at the end.
 *
 * Time: O(n)
 * Space: O(n);
 */

var calculate = function(s) {
  if (!s.length) return 0;

  let operator = '+';
  let stack = [];

  for (let i = 0, num = 0; i <= s.length; i++) {
    let char = s.charAt(i);
    if (char === ' ') continue;

    /*
    Commented out code fails for test case '42'.
    We need to convert it to it's proper number
    representation. 
    */

    if (char >= '0' && char <= '9') {
      num = num * 10 + Number(char);
      // num = Number(char);
      continue;
    }

    if (operator === '+') {
      stack.push(num);
    } else if (operator === '-') {
      stack.push(-num);
    } else if (operator === '*') {
      stack.push(stack.pop() * num);
    } else if (operator === '/') {
      stack.push(Math.trunc(stack.pop() / num));
    }

    operator = char;
    num = 0;
  }
  return stack.reduce((a, b) => a + b);
};
