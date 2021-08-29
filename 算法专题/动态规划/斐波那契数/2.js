//动态规划
//60ms
var fib = function (n) {
    let a = 0,
        b = 1,
        sum;
    for (let i = 0; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return a;
};