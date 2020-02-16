/**
 * @param {string} s
 * @return {boolean}
 */

function studentAttendanceRecord(s) {
  let absentFlag = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === 'A' && absentFlag) {
      return false;
    } else if (char === 'A' && absentFlag === false) {
      absentFlag = true;
    }

    if (char === 'L') {
      let num = 1;
      let j = i + 1;

      while (char === s[j]) {
        num++;
        j++;
      }
      if (num >= 3) {
        return false;
      }
    }
  }
  return true;
}

module.exports = studentAttendanceRecord;
