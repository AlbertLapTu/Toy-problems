function spiralMatrixII(n) {
  const res = Array.from(new Array(n), () => []);

  let dir = 'right';
  let top = 0;
  let right = res.length - 1;
  let bottom = res.length - 1;
  let left = 0;
  let k = 1;

  while (top <= bottom && left <= right && k <= Math.pow(n, 2)) {
    if (dir === 'right') {
      for (let i = left; i <= right; i++) {
        res[top][i] = k;
        k++;
      }
      top++;
      dir = 'down';
    } else if (dir === 'down') {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = k;
        k++;
      }
      right--;
      dir = 'left';
    } else if (dir === 'left') {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = k;
        k++;
      }
      bottom--;
      dir = 'up';
    } else if (dir === 'up') {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = k;
        k++;
      }
      left++;
      dir = 'right';
    }
  }
  return res;
}

module.exports = spiralMatrixII;
