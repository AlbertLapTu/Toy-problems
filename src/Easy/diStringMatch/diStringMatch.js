/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let resultArr = [];
  let min = 0;
  let max = S.length;

  for (letter in S) {
    if (S[letter] === 'I') {
      resultArr.push(min);
      min++;
    } else {
      resultArr.push(max);
      max--;
    }
  }

  if (S[S.length - 1] === 'I') {
    resultArr.push(min);
  } else {
    resultArr.push(max);
  }
  return resultArr;
};

// S = string that will ONLY contain capital I and capital D. Let N be S.length

// Ex: "IDID" S.length = 4.

// Retrun any permutation A of [0...N] (N being the length of the string), such that i = 0, ...n-1.

// If the current letter is I, then A[i] < A[i+1]; the next letter must be greater than the current letter
// If the current letter is D, then A[i] > A[i+1]; the previous letter must be greater than the next letter

// IDID

// I will equal 0 initially.
