/**
 * @param {number[][]} grid
 * @return {number}
 *
 * Intuition: Traverse until you hit an island (denoted as a 1). If you find a 1, add 4 to the perimeter.
 * Check up/right/down/left to check if it's in-bounds, and if it's another island. Decrement from perimeter.
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) continue;

      perimeter += 4;

      //Check up
      if (row > 0 && grid[row - 1][col] === 1) perimeter--;
      //Check right
      if (col < grid[row].length - 1 && grid[row][col + 1] === 1) perimeter--;
      //Check down
      if (row < grid.length - 1 && grid[row + 1][col] === 1) perimeter--;
      //Check left
      if (col > 0 && grid[row][col - 1] === 1) perimeter--;
    }
  }
  return perimeter;
};
