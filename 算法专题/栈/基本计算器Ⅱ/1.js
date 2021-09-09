/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.trim(); //去除两端空格
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') { //判断是否是符号，这里要是符号，
            // 当字符串为空时，前半段也会为true
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt(); //用于两位数及以上
        }
        if (isNaN(Number(s[i])) || i === n - 1) { //
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};
console.log(calculate("3/2"));