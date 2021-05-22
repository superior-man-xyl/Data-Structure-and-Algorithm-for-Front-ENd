/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let a = 0,
        b = 1,
        sum;
    for (let i = 0; i < n; i++) {
        // console.log(a,"+++++",b)
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
};
// 0 1 1 2 3 5   第一项为1
console.log(fib(1111));