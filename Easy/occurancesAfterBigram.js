/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
/*

Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]


*/
var findOcurrences = function(text, first, second) {
  text = text.split(' ');
  const res = [];

  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) {
      res.push(text[i + 2]);
    }
  }
  return res;
};
