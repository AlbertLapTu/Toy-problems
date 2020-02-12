/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0] === 1) return -1;

  if (grid.length === 1) {
    return 1;
  }

  // x, y, distance traveled
  const queue = [[0, 0, 1]];
  const DIRS = [
    [-1, -1], // up left
    [0, -1], // up
    [1, -1], // up right
    [1, 0], // right
    [1, 1], // down right
    [0, 1], // down
    [-1, 1], // down left
    [-1, 0], // left
  ];
  const len = grid.length;
  const seen = generateArray(len);

  while (queue.length > 0) {
    // Remove from the front of the queue for BFS.
    let [r, c, dist] = queue.shift();
    // iterate over dirs
    for (const [dx, dy] of DIRS) {
      let newX = r + dx;
      let newY = c + dy;
      let newDist = dist + 1;

      if (
        newX < 0 ||
        newX >= len ||
        newY < 0 ||
        newY >= len ||
        // seen.has is pseudo code. We need to check if its been visited
        // Best to use an matrix with true/false values
        grid[newX][newY] === 1 ||
        seen[newX][newY]
      ) {
        continue;
      }

      // We reached the end
      if (newX === len - 1 && newY === len - 1) {
        return newDist;
      }

      // Mark position as seen
      seen[newX][newY] = true;
      // Otherwise, we havent found it, so we need to add this path into the queue
      queue.push([newX, newY, newDist]);
    }
  }
  return -1;
};

function generateArray(len) {
  const res = [];

  for (let i = 0; i < len; i++) {
    res.push(new Array(len).fill(false));
  }

  return res;
}

module.exports = shortestPathBinaryMatrix;
