// 使用动态规划，自底向上
var coinChange = function (coins, amount) {
    const fn = [];
    fn[0] = 0;
    for (let i = 0; i < amount; i++) {
        fn[i] = Infinity;
        coins.map((item) => {
            if (i - item >= 0) {
                fn[i] = Math.min(f[i], f[i - item] + 1);
            }
        })
    }
    if (fn[amount] == Infinity) {
        return -1;
    }
    return fn[amount];
};