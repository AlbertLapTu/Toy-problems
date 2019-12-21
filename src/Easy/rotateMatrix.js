//Given an image represented by an NxN matrix, rotate the image by 90 degrees

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotateMatrix = (matrix) => {
  let output = [];
  for (let i = matrix[0].length - 1; 0 <= i; i--) {
    let trio = [];
    for (let j = 0; j < matrix[i].length; j++) {
      trio.unshift(matrix[j][i]);
    }
    output.unshift(trio);
  }
  return output;
};

rotateMatrix(matrix);
