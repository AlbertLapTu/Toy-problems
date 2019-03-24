/**
 * @param {string} S
 * @return {number}
 * 
 * 
 * 
 * Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

  Formally, a parentheses string is valid if and only if:

  It is the empty string, or
  It can be written as AB (A concatenated with B), where A and B are valid strings, or
  It can be written as (A), where A is a valid string.
  Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
 * 
 * 
 */

//Example is ( ( ( ) )
//object is {(: 3, ): 2}

var minAddToMakeValid = parens => {
  let hash = {};
  let splitParens = parens.split('');
  let counter = 0;
  //Builds the object
  for (paren of parens) {
    !hash[paren] ? (hash[paren] = 1) : hash[paren]++;
  }

  for (let i = 0; i < splitParens.length; i++) {
    //For the current paren, check to see if the inverse is located in the object.
    if (splitParens[i] === '(') {
      if (hash[')'] >= 0) {
        counter++;
        hash[')']--;
      } else {
        continue;
      }
    } else if (splitParens[i] === ')') {
      if (hash['('] >= 0) {
        counter++;
        hash['(']--;
      } else {
        continue;
      }
    }
  }
  return counter;
};

/*
I: Parenthesis as a string
O: Number, representing the amount of parens you need to add
C: None
E: None

//If the value is a left parens, check the one after it 
Left paren is a currency
Right paren is the one you pay


*/
