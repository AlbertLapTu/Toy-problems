var isValid = function(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (char === ')') {
        if (popped !== '(') {
          return false;
        }
      } else if (char === ']') {
        if (popped !== '[') {
          return false;
        }
      } else if (char === '}') {
        if (popped !== '{') {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
