var selfDividingNumbers = function(left, right) {
  let hash = {};
  let selfDividedNumbers = [];

  for (let i = left; i <= right; i++) {
    !hash[i] ? (hash[i] = 1) : hash[i]++;
  }

  return Object.keys(hash)
    .map((e) => Number(e))
    .filter((elem) => isSelfDivisible(elem));
};

var isSelfDivisible = function(num) {
  let numSplit = num
    .toString()
    .split('')
    .map((e) => Number(e));
  let isDivisible = true;

  for (let i = 0; i < numSplit.length; i++) {
    if (num % numSplit[i] !== 0) {
      isDivisible = false;
    }
  }
  return isDivisible;
};
