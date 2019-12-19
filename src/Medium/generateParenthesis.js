/**
 * @param {number} n
 * @return {string[]}
 */

/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Intuition: Backtrack/permutation problem. Generate all of the opening parenthesis first then generate the closing
parenthesis second. Once you run out of openers/closers, push the result inan array. 


*/
var generateParenthesis = function(n) {
  const output = [];

  const generateParens = (permutation, opener, closer) => {
    if (opener > closer) return;
    if (!opener && !closer) {
      output.push(permutation.join(''));
    }
    if (opener) {
      generateParens(permutation.concat('('), opener - 1, closer);
    }
    if (closer) {
      generateParens(permutation.concat(')'), opener, closer - 1);
    }
  };

  generateParens([], n, n);
  return output;
};
