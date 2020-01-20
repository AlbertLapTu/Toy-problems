/*

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

function rottingOranges(grid) {
  let queue = [];
  let minutes = 0;
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let orange = grid[i][j];

      if (orange === 2) {
        queue.push([i, j]);
      }

      if (orange === 1) {
        fresh++;
      }
    }
  }

  while (queue.length && fresh) {
    // Queue for the next minute
    let newQueue = [];
    while (queue.length) {
      let rotten = queue.shift();
      let newRotten = infect(grid, rotten[0], rotten[1], newQueue);
      fresh -= newRotten;
    }

    minutes++;
    queue = newQueue;
  }

  if (fresh !== 0) {
    return -1;
  }

  return minutes;
}

function infect(grid, i, j, q) {
  let infected = 0;
  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++;
    infected++;
    q.push([i - 1, j]);
  }
  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++;
    infected++;
    q.push([i, j - 1]);
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++;
    infected++;
    q.push([i + 1, j]);
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++;
    infected++;
    q.push([i, j + 1]);
  }

  return infected;
}

module.exports = rottingOranges;
