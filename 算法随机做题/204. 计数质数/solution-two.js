// 进行优化，使用埃氏筛，增加数与数之间的关联性
var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) { //首先起初2是，一个事实：如果 xx 是质数，那么大于 xx 的 xx 的倍数 2x,3x,
            // 4x… 一定不是质数，因此我们可以从这里入手。
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};

console.log(countPrimes(2));