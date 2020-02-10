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
