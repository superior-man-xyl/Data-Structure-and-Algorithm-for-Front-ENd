// 动态规划 自顶向下
const fn = [];
var climbStairs = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    if (fn[n] == undefined) {
        fn[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return fn[n];
};