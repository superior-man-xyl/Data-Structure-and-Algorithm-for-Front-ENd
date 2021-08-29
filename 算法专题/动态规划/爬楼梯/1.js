// 动态规划 自底向上
const fn = [];
fn[1] = 1;
fn[2] = 2;
var climbStairs = function (n) {
    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            fn[i] = fn[i - 1] + fn[i - 2];
        }
    }
    return fn[n];
};