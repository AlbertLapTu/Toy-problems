var queensAttacktheKing = function(queens, king) {
  const board = makeBoard(queens, king);

  horizontalCheck(board[0], 1, 1);
};

function makeBoard(queens, king) {
  let board = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    [0, 2, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < queens.length; i++) {
    let [x, y] = queens[i];
    board[y][x] = 'Q';
  }

  let [y, x] = king;
  board[y][x] = 'K';

  return board;
}

// Checks left/right given a coordinate
function horizontalCheck(arr, x, y) {
  let noLeftConflicts = true;
  let noRightConflicts = true;
  let foundKing = false;

  // Check right
  for (let i = x; i < arr.length; i++) {
    // if we run into any queens, before a king we have a conflict
    if (arr[i] === 'Q') {
      noRightConflicts = false;
    } else if (arr[i] === 'K') {
    }
  }

  // check behind
  for (let i = x; i >= 0; i--) {
    if (arr[i] === 'Q') {
      noLeftConflicts = false;
    }
  }

  // if (noLeftConflicts && noRightConflicts) {
  //   return true;
  // }
}

queensAttacktheKing(
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 5],
  ],
  [3, 3],
);

// makeBoard(8,8, [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], [3,3]);
module.exports = queensAttacktheKing;
