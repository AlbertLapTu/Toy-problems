/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(new Array(n).fill([]));

  for (let row = 0; row < m; row++) {
    dp[row][0] = 1;
  }

  for (let col = 0; col < n; col++) {
    dp[0][col] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row][col - 1] + dp[row - 1][col];
    }
  }

  return dp[dp.length - 1][n - 1];
};
