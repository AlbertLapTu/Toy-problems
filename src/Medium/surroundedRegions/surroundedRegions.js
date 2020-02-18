/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// First attempt
// This solution will only handle checking if the 'O' is adjacent to an an edge. In this example,
// every O can form an adjacent O-chain that reaches an edge. If that happens, you do not toggle.
// this solution does not handle that edge case! Check secondary answer for how this was solved.
function surroundedRegions(board) {
  if (!board.length) return board;

  const dfs = (board, i, j) => {
    // Checks the boundaries
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[i].length) {
      return;
    }

    // Checks to see if its on an edge
    if (
      (board[i][j] === 'O' && i === 0) ||
      i === board.length - 1 ||
      j === 0 ||
      j === board[i].length - 1
    ) {
      return;
    }

    // If any of the adjacent are Os, and the Os are on an edge, do not flip
    if (board[i][j] === 'O') {
      if (board[i - 1][j] === 'O' && i - 1 === 0 && board[i - 1][j] === 'O') {
        return;
      } else if (
        board[i][j + 1] === 'O' &&
        j + 1 === board[i].length - 1 &&
        board[i][j + 1] === 'O'
      ) {
        return;
      } else if (board[i + 1][j] === 'O' && i + 1 === board.length - 1 && board[i + 1][j] === 'O') {
        return;
      } else if (board[i][j - 1] === 'O' && j - 1 === 0 && board[i][j - 1] === 'O') {
        return;
      }
    }

    if (board[i][j] === 'O') {
      board[i][j] = 'X';
      dfs(board, i - 1, j);
      dfs(board, i, j + 1);
      dfs(board, i + 1, j);
      dfs(board, i, j - 1);
    }
  };

  //   debugger;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'X') {
        continue;
      }
      dfs(board, row, col);
    }
  }

  console.log(board);
}

module.exports = surroundedRegions;
