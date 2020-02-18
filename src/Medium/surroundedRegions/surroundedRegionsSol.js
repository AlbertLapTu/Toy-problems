/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board.length) {
    return board;
  }

  const toggle = (board, i, j) => {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[i].length - 1 || board[i][j] !== 'O') {
      return;
    }

    board[i][j] = '#';

    toggle(board, i - 1, j);
    toggle(board, i, j + 1);
    toggle(board, i + 1, j);
    toggle(board, i, j - 1);
  };

  // Change all squares connected from L/R borders to #
  for (let i = 0; i < board.length; i++) {
    toggle(board, i, 0);
    toggle(board, i, board[0].length - 1);
  }

  // Change all squares connected from T/B borders to #
  for (let i = 0; i < board[0].length - 1; i++) {
    toggle(board, 0, i);
    toggle(board, board.length - 1, i);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }

      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};

module.exports = solve;
