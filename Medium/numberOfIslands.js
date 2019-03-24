/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * [ [ '1', '1', '1', '1', '0' ],
  [ '1', '1', '0', '1', '0' ],
  [ '1', '1', '0', '0', '0' ],
  [ '0', '0', '0', '0', '0' ] ]
 * 
 * 
 */

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

const traverse = (grid, i, j) => {
  if (grid[i][j] === '1') {
    //If island, mark as visited
    grid[i][j] = '!';
    //Check left
    if (j > 0 && j - 1 !== undefined) traverse(grid, i, j - 1);
    //If our current position is less than the endpoint, travel towards the right
    if (j < grid[i].length && j + 1 !== undefined) traverse(grid, i, j + 1);
    //Check bottom
    if (i > 0 && i - 1 !== undefined) traverse(grid, i - 1, j);
    //Keep traveling to the top
    if (i < grid.length - 1 && i + 1 !== undefined) traverse(grid, i + 1, j);
  }
};

var numIslands = function(grid) {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        traverse(grid, i, j);
      }
    }
  }
  return islandCount;
};

numIslands(grid);
