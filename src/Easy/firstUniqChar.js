var firstUniqChar = function(s) {
  let myMap = new Map();

  for (let i = 0; i < s.length; i++) {
    myMap.has(s[i]) ? myMap.set(s[i], 2) : myMap.set(s[i], 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (myMap.has(s[i]) && myMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
