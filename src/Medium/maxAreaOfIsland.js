var maxAreaOfIsland = function(grid) {
  let maxIslands = 0;
  let count = 0;

  const traverse = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      return;
    }

    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      count++;
      traverse(row - 1, col);
      traverse(row, col + 1);
      traverse(row + 1, col);
      traverse(row, col - 1);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      traverse(row, col);
      maxIslands = Math.max(count, maxIslands);
      count = 0;
    }
  }
  return maxIslands;
};
