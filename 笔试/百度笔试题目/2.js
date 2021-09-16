// 输出最长的01数量相同的两段的起始末下标
let arr = '101'.split('');

function sum(arr) {
    return arr.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    })
}
let res = [];
for (let i = arr.length - 1; i > 1; i--) {
    if (res.length > 0) {
        break;
    }
    for (let j = 0; j <= arr.length - i; j++) {
        if (res.length > 0) {
            break;
        }
        for (let k = 0; k <= arr.length - i; k++) {
            let res1 = arr.slice();
            let res2 = arr.slice();
            if (k == j) {
                continue;
            }
            let num1 = sum(res1.splice(j, i))
            let num2 = sum(res2.splice(k, i))
            if (num1 == num2) {
                res.push([j + 1, j + i, k + 1, k + i]);
            }
            if (res.length > 0) {
                break;
            }
        }
    }
}
console.log(`${res[0][0]} ${res[0][1]} ${res[0][2]} ${res[0][3]}`);