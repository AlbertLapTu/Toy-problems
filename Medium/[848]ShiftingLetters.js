/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */

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

var shiftingLetters = function(S, shifts) {
  let output = '';
  if (!S.length || !shifts.length) return output;
  let stringArr = S.split('');

  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const amountToShift = shifts[i];
    stringArr[i] = shiftChar(char, amountToShift);
  }

  return stringArr.join('');
};

//Use string math to flip characters
const shiftChar = (char, val) => {
  const flippedChar = ((char.charCodeAt() - 'a'.charCodeAt() + val) % 26) + 'a'.charCodeAt();

  return String.fromCharCode(flippedChar);
};

/*
A shift means the next letter in the alphabet. If we're on the last letter of
alphabet, next shift should be a. 

Shifts[i] = how many shifts to make for i+1 letters of S. 

"abc", shifts [3,5,9]

Shift[0] = 3 / Index = 0
Shift[1] = 5 / Index = 1
Shift[2] = 9 / Index = 2

For shift[0], 1 character must be shifted (i + 1)
For shift[1], 2 character must be shifted (i + 1)
For shift(2), 3 character must be shifted (i + 1)

"abc"

"dbc" Result of shift[0]

"igc" result of shift[1]

"rpl" result of shift[2]

*/

var shiftingLetters = function(S, shifts) {
  let output = '';
  if (!S.length || !shifts.length) return output;
  let stringArr = S.split('');

  //No need to iterate over shifts, we can just total shifts up
  //per index and flip all at once.
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const amountToShift = shifts[i];
    stringArr[i] = shiftChar(char, amountToShift);
  }

  return stringArr.join('');
};

/**
 *
 * @param {string} char
 * @param {number} val
 *
 * This function uses string math to first find the character to flip to.
 * Use % 26 because we want to find out where the character lands, and add it to 97.
 */
const shiftChar = (char, val) => {
  const flippedChar = ((char.charCodeAt() - 'a'.charCodeAt() + val) % 26) + 'a'.charCodeAt();

  return String.fromCharCode(flippedChar);
};
