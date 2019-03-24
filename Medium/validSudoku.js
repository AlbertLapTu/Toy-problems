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
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i], 'i piece');
    for (let j = 1; j < board.length - 1; j++) {
      console.log(board[j], 'j piece');
    }
  }
};

var validRowChecker = array => {
  let counter = {};
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) && !counter[array[i]]) {
      counter[array[i]] = 1;
    } else if (Number(array[i]) && counter[array[i]]) {
      counter[array[i]]++;
    }
  }
  return Object.values(counter).every(val => val > 2);
};

let graph = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

validColumnChecker(graph);

//Helper to take in a row, and check for duplicates
//Helper to take in a column, and check for duplicates
//Helper to take in a 3x3 grid and check for duplicates
