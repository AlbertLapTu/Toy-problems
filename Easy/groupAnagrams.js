var groupAnagrams = function(strs) {
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    let currentString = strs[i];
    let sorted = currentString
      .split('')
      .sort()
      .join('');

    if (!hash[sorted]) {
      hash[sorted] = [currentString];
    } else {
      hash[sorted].push(currentString);
    }
  }

  let output = [];

  for (key in hash) {
    output.push(hash[key]);
  }

  return output;
};
