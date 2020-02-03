function basicCalculator(s) {
  if (!s.length) return 0;

  let charArray = s.split('');
  const numStack = [];
  const tokenStack = [];

  const tokens = ['(', ')', '+', '-'];

  for (let i = 0; i < charArray.length; i++) {
    let token = charArray[i];

    if (token === ' ') continue;

    // If its a token, add to the token stack
    if (tokens.includes(token)) {
      tokenStack.push(token);
      // Otherwise if its a closing character
    } else if (token === ')') {
      while (tokenStack[tokenStack.length - 1] !== '(') {
        let solved = evaluate(numStack.pop(), numStack.pop(), tokenStack.pop());
        numStack.push(solved);
      }
    } else {
      // Otherwise, its a number
      numStack.push(parseInt(token));
    }
  }
}

function evaluate(a, b, token) {
  switch (token) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return;
  }
}

// If current character is an open paren, solve inside the parens
// Otherwise, if it is any other token
// Calculate the * and / first. Or whatever precedence is first.
// There may be times where a number may have multiple digits , e.g. 1231 * 32

module.exports = basicCalculator;
