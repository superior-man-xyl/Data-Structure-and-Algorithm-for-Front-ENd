/**
 * @param {number} n
 * @return {number}
 */
// 做一个判断是否质数的工具函数,prime表示质数
const isPrime = (num) => {
    if (num == 1) { // 1不是质数
        return false;
    }
    for (let i = 2; i * i <= num; i++) { // 因为i*i>num的部分，怎么算都比num大,不需要用来做判断了
        if (num % i == 0) { // 那就是合数
            return false;
        }
    }
    return true;
}
const numPrimeArrangements = (n) => {
    // 先计算n里面质数的数量，该数量和质数下标数量一样
    let primeNum = 0,
        unPrimeNum = 1;
    while (n > 1) { // n被我改变了，除非拷贝n，不然不能使用n-primeNum来得到unPrimeNum
        if (isPrime(n)) {
            primeNum++;
        } else {
            unPrimeNum++;
        }
        n--;
    }
    // 计算其排列需要按照相关的数学知识
    // 第一个位置有k种，第二个位置有k-1种，第三个位置有k-2种，最后一个只有1种。按照这样乘下去就行了
    const mod = 1000000007;
    let res = 1;
    while (primeNum > 1) {
        res = (res * primeNum) % mod;
        primeNum--;
    }
    while (unPrimeNum > 1) {
        res = (res * unPrimeNum) % mod;
        unPrimeNum--;
    }
    return res;
};

console.log(numPrimeArrangements(100));