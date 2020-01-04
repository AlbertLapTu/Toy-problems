/**
 * @param {number[][]} A
 * @return {number[][]}
 *
 * Given a binary matrix A, we want to flip the image horizontaly, then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image ifs reversed. For example, flipping [1,1,0] horizontally results in
 * [0,1,1].
 *
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0,1,1] results in [1,0,0];
 *
 */

var flipAndInvertImage = function(A) {
  const B = [];
  for (let arr of A) {
    const reverseInvertedArr = arr.reverse().map((elem) => (elem === 1 ? 0 : 1));
    arr = reverseInvertedArr;
    B.push(reverseInvertedArr);
  }
  return B;
  console.log(ba);
};
