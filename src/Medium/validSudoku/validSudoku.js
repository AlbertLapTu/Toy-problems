/**
 * @param {character[][]} board
 * @return {boolean}
 */

function validSudoku(board) {
  let isValid = true;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j += 2) {
      if (!checkRow(board, i) || !checkCol(board, i, j) || !checkSub(board, i, j)) {
        isValid = false;
      }
    }
  }

  return isValid;
}

function checkRow(board, row) {
  let seen = new Set();

  for (let i = 0; i < board.length; i++) {
    if (board[i] === '.') continue;

    if (!seen.has(board[i])) {
      seen.add(board[i]);
    } else {
      return false;
    }
  }
  return true;
}

function checkCol(board, row, col) {
  let seen = new Set();

  for (let i = 0; i < board[row].length; i++) {
    if (board[i][row] === '.') continue;

    if (!seen.has(board[i][row])) {
      seen.add(board[i][row]);
    } else {
      return false;
    }
  }
  return true;
}

function checkSub(board, row, col) {
  let seen = new Set();

  for (let i = 0; i < board.length + 3; i++) {
    for (let j = 0; j < board[row].length + 3; j++) {
      if (board[i][j] === '.') {
        continue;
      }

      if (!seen.has(board[i][j])) {
        seen.add(board[i][j]);
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = validSudoku;
