// 这个题目的重点在于如何优化速度，下面花了3800ms跑完用例，使用的是枚举法

const isPrime = (n) => {
    if (n == 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) { //只需要判断[1,x^1/2]内是否有就行
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
var countPrimes = function (n) {
    if (n <= 1) {
        return 0;
    }
    n = n -1; // 因为题目要求不包括其自己
    let res = 0;
    while (n > 1) {
        if (isPrime(n)) {
            res++;
        }
        n--;
    }
    return res;
};

console.log(isPrime(2),countPrimes(2));