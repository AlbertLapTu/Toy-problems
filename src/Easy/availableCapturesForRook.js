var numRookCaptures = function(board) {
  let rookPosition = findRook(board);
  let [row, col] = rookPosition;
  let sum = 0;

  sum += travelUp(board, row, col);
  sum += travelRight(board, row, col);
  sum += travelDown(board, row, col);
  sum += travelLeft(board, row, col);

  return sum;
};

function findRook(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        return [i, j];
      }
    }
  }
}

function travelUp(board, row, col) {
  let sum = 0;

  while (true) {
    if (row < 0) break;
    if (board[row][col] === 'B') {
      break;
    } else if (board[row][col] === 'p') {
      sum += 1;
      break;
    }
    row--;
  }
  return sum;
}

function travelRight(board, row, col) {
  let sum = 0;

  while (true) {
    if (col > board[row].length - 1) break;
    if (board[row][col] === 'B') {
      break;
    } else if (board[row][col] === 'p') {
      sum += 1;
      break;
    }
    col++;
  }
  return sum;
}

function travelDown(board, row, col) {
  let sum = 0;

  while (true) {
    if (row > board.length - 1) break;
    if (board[row][col] === 'B') {
      break;
    } else if (board[row][col] === 'p') {
      sum += 1;
      break;
    }
    row++;
  }
  return sum;
}

function travelLeft(board, row, col) {
  let sum = 0;

  while (true) {
    if (col < 0) break;
    if (board[row][col] === 'B') {
      break;
    } else if (board[row][col] === 'p') {
      sum += 1;
      break;
    }
    col--;
  }
  return sum;
}
