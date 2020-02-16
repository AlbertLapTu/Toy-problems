const fn = require('../studentAttendanceRecord');

describe('Easy - Student attendance record I', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should return a boolean if the student can be rewarded', () => {
    const input1 = 'PPALLP';
    const input2 = 'PPALLL';

    expect(fn(input1)).toBeTruthy();
    expect(fn(input2)).toBe(false);
  });
});
