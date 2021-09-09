var calculate = function (s) {
    // s=s.trim();//去除两边的空格
    const stack = []; //数值栈
    let sign = '+'; //符号
    let ans = 0; //累加和
    s = s.replace(/\s/g, '')
    for (let i = 0; i < s.length; i++) {
        let num = '';
        //判断是否是符号
        if (s[i] < '0') {
            sign = s[i];
        } else {
            while (s[i] >= '0' && i < s.length) {
                num = num + s[i];
                i++; //这里是用于组合两位数以上的值
            }
            i--; //如果上面跳出来了就多了一次，最大是s.length
            //接下来，把数据压入栈
            num = Number(num);
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(stack.pop() / num | 0);
                    // console.log(stack[stack.length-1]);
                    //注意这|的用法，它能得到一个整数
            }
        }
    }
    // console.log(stack.sign)
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};
console.log(calculate(" 3+5 / 2 "));