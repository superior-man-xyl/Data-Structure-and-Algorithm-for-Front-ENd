/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// 方法一：最长公共子序列，从1143题学习
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = word1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = word2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const lcs = dp[m][n];
  return m - lcs + n - lcs;
};
