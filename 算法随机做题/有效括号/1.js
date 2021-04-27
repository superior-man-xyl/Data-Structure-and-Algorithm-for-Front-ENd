/**
 * @param {string} s
 * @return {boolean}
 */
const leftToRight = {
    '(': ')',
    '{': '}',
    '[': ']'
}
//思想是把左边的转换为右边那半括号，就可以进行比较了
var isValid = function (s) {
    if (!s) { //空直接就返回true
        return true;
    }
    const stack = [];
    const len = s.length;
    for (let i=0; i < len; i++) {
        const ch = s[i];
        if (ch === '(' || ch === '{' || ch === '[') {
            //遇到左边的符号就压入相应右边符号
            stack.push(leftToRight[ch]);
        } else {
            //遇到了右边符号，就从栈中弹出前一个值，比较是否相等就能知道是否对称
            if (!stack.length || stack.pop() !== ch) { //第一个就为右边符号，那栈长度就会为0，就铁定不相等
                return false;
            }
        }
    }
    return !stack.length;
    //如果栈最后都清空了就返回true，这就省去了判断字符串长度是否为复数,和后面判断是否对称
};

console.log(isValid('(]'));