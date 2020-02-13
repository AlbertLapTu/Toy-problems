/*

We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

Example 1:

Input: S = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: 
We start with "abc".
After shifting the first 1 letters of S by 3, we have "dbc".
After shifting the first 2 letters of S by 5, we have "igc".
After shifting the first 3 letters of S by 9, we have "rpl", the answer.

*/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */

// Original solution O(n)^2

// var shiftingLetters1 = function(S, shifts) {
//   if (!S.length || !shifts.length) return '';

//   S = S.split('');

//   for (let i = 0; i < shifts.length; i++) {
//     let amountToShift = shifts[i];

//     for (let j = 0; j < i + 1; j++) {
//       S[j] = shiftChar(S[j], amountToShift);
//     }
//   }
//   return S.join('');
// };

function shiftChar(char, val) {
  let flippedChar = ((char.charCodeAt() - 97 + val) % 26) + 97;

  return String.fromCharCode(flippedChar);
}

// Optimize by pre-computing shifts
var shiftingLetters = function(S, shifts) {
  S = S.split('');

  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  for (let i = 0; i < S.length; i++) {
    let amountToShift = shifts[i];
    S[i] = shiftChar(S[i], amountToShift);
  }
  return S.join('');
};

module.exports = shiftingLetters;
