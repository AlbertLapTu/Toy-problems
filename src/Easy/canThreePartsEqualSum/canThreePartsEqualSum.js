/**
 * @param {number[]} A
 * @return {boolean}
 */

function canThreePartsEqualSum(A) {
  let foundFirst = false;
  let foundSecond = false;
  let foundThird = false;
  const equalSum = A.reduce((a, b) => a + b) / 3;

  let sum = 0;
  let startOff;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum === equalSum) {
      foundFirst = true;
      startOff = i + 1;
      break;
    }
  }

  sum = 0;
  for (let j = startOff; j < A.length; j++) {
    sum += A[j];
    if (sum === equalSum && foundFirst) {
      foundSecond = true;
      startOff = j + 1;
      break;
    }
  }
  sum = 0;
  for (let k = startOff; k < A.length; k++) {
    sum += A[k];
    if (sum === equalSum && foundFirst && foundSecond) {
      foundThird = true;
    }
  }

  return foundFirst && foundSecond && foundThird;
}

module.exports = canThreePartsEqualSum;
