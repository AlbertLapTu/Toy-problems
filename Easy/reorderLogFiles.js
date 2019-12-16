/*


You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

*/

const reorderLogFiles = logs => {
  //Ignore the identifier
  const body = s => s.slice(s.indexOf(' ') + 1);
  // Validate if the string character is a digit
  const isNum = c => /\d/.test(c);

  const compare = (a, b) => {
    /**
     * localeCompare as it stands here will compare the two strings to see if they are
     * the same. Additional parameters can be passed in to determine whether if a char
     * comes before the next char.
     *
     * Additional readings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
     */
    const isSameString = body(a).localeCompare(body(b));

    // If they aren't the same, it should return -1
    if (isSameString !== 0) {
      return isSameString;
    }

    // Returns 0 if they are the same
    return a.localeCompare(b);
  };

  const digits = [];
  const letters = [];

  for (const entry of logs) {
    if (isNum(body(entry))) {
      digits.push(entry);
    } else {
      letters.push(entry);
    }
  }

  return [...letters.sort(compare), ...digits];
};
