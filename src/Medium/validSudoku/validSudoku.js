/**
 * @param {character[][]} board
 * @return {boolean}
 */

/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the 
following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
*/

const board = [
  ['5', '3', '3', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const isValidSudoku = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let currentVal = board[row][col];
      if (currentVal === '.') continue;

      if (validateRows && validateCols && validateBox) {
        return true;
      }
    }
  }
  return false;
};

const validateRows = (board, row) => {
  let rowSet = new Set();

  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === '.') continue;
    let boardVal = board[row][i];

    if (!rowSet.has(boardVal)) {
      rowSet.add(boardVal);
    } else {
      return false;
    }
  }
  return true;
};

const validateCols = (board, row, col) => {
  let colSet = new Set();

  for (let i = col; i < board[row].length; i++) {
    if (board[i][row] === '.') continue;
    let colValue = board[i][row];

    if (!colSet.has(colValue)) {
      colSet.add(colValue);
    } else {
      return false;
    }
  }
  return true;
};

const validateBox = (board, row, col) => {
  let boxSet = new Set();

  for (let i = row; i < board[0].length / 3; i++) {
    for (let j = col; j < board[i].length / 3; j++) {
      if (board[i][j] === '.') continue;

      if (!boxSet.has(board[i][j])) {
        boxSet.add(board[i][j]);
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board));
