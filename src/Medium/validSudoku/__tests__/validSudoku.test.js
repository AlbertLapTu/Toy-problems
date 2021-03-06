const fn = require('../validSudoku');

describe('[Insert title]', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test.skip('Should validate a sudoku board', () => {
    const input1 = [
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

    const input2 = [
      ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
      ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
      ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
      ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ];

    expect(fn(input1)).toBe(true);
    expect(fn(input2)).toBe(false);
  });
});
