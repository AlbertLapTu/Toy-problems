/*

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". 
When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]


*/

var findRepeatedDnaSequences = function(s) {
  if (!s.length) return [];
  let cache = new Set();
  let output = [];

  for (let i = 0; i < s.length - 9; i++) {
    let substr = s.substring(i, i + 10);
    if (!cache.has(substr)) {
      cache.add(substr);
    } else {
      output.push(substr);
    }
  }
  return output;
};
