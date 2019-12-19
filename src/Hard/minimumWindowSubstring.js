/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let dict = {};
  for (let char of t) {
    !dict[char] ? (dict[char] = 1) : dict[char]++;
  }

  let counter = t.length;
  let start = 0;
  let end = 0;
  let startWindow = 0;
  let endWindow = 0;
  let distance = Number.MAX_SAFE_INTEGER;

  while (end < s.length) {
    let char = s[end];
    if (dict[char] > 0) {
      counter--;
    }

    if (dict[char] !== undefined) {
      dict[char]--;
    }

    while (counter === 0) {
      let temp = s[start];

      if (end - start < distance) {
        distance = end - start;
        startWindow = start;
        endWindow = end;
      }
      if (dict[temp] === 0) {
        counter++;
      }
      if (dict[temp] < 1) dict[temp]++;
      start++;
    }
    end++;
  }
  return distance === Number.MAX_SAFE_INTEGER ? '' : s.slice(startWindow, endWindow + 1);
};
