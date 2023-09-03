/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Dynamic Programming technique bottom up approach
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = 1;
  }

  for (let j = 0; j < n; j++) {
    dp[m - 1][j] = 1;
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  return dp[0][0];
};
