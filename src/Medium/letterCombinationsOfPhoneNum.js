var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const permutations = [];

  const permutate = (str, permutation) => {
    if (str.length === 0) {
      permutations.push(permutation);
    } else {
      let digits = phoneMap[str[0]];

      for (char of digits) {
        permutate(str.substring(1), permutation.concat(char));
      }
    }
  };

  permutate(digits, '');
  return permutations;
};
