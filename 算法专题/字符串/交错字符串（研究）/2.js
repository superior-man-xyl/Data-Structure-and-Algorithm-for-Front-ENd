// 动态规划优化1.js
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;

    const memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s2.length + 1);
    }

    const check = (i, j, k) => {
        if (memo[i][j] != null) return memo[i][j];

        if (k == s3.length) return memo[i][j] = true;

        let isValid = false;

        if (i < s1.length && s1[i] == s3[k]) {
            isValid = check(i + 1, j, k + 1);
        }
        if (j < s2.length && s2[j] == s3[k]) {
            isValid = isValid || check(i, j + 1, k + 1);
        }
        return memo[i][j] = isValid;
    };

    return check(0, 0, 0);
};