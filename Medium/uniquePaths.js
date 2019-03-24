/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// m is columns
// r are rows
var uniquePaths = function(m, n) {
  let paths = 0;

  const traverse = (columns, rows) => {
    if (columns === m && rows === n) {
      paths++;
      return;
    }
    //Travel to the right
    if (columns < m) {
      traverse(columns + 1, rows);
    }
    //Travel down
    if (rows < n) {
      traverse(columns, rows + 1);
    }
  };
  traverse(0, 0);
  return paths;
};

//Keep going right until you can't go right anymore
//Go down until you can't go down anymore
