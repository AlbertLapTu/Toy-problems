/**
 *
 * @param {array[][]} queries
 * @returns {array[]} - Returns an array of all outputs of queries of type 3.
 */
function frequencyQueries(queries) {
  const hash = {};
  const res = [];

  if (!queries.length) {
    return res;
  }

  for (let i = 0; i < queries.length; i++) {
    let [operation, element] = queries[i];

    if (operation === 1) {
      !hash[element] ? (hash[element] = 1) : hash[element]++;
    }

    if (operation === 2 && hash[element]) {
      hash[element]--;
    }

    // Instead of iterating, we can store the frequencies of that element in a frequency array.
    // We can use array indexing to see if the frequency in that array is greater than to figure out
    // what number to push.
    if (operation === 3) {
      let flag = true;
      for (let key in hash) {
        if (hash[key] === element) {
          flag = false;
          res.push(1);
        }
      }

      if (flag) {
        res.push(0);
      }
    }
  }
  return res;
}

module.exports = frequencyQueries;
