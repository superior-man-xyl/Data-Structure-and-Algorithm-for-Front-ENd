// num为二进制字符串，返回对个别一段区间取反，得到最大的值
function erjz(arr) {
    let res = [...arr].reverse();
    let sum = 0n;
    k=1n;
    for (let i = 0; i < res.length; i++) {
        sum += BigInt(res[i]) * k;
        k=k*2n;
    }
    return sum;
}

function maxLexicographical(num) {
    // write code here
    let res = '';
    let sum = 0n;
    let arr = num.split('').map((item) => parseInt(item));
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let arr1 = [...arr];
            let k = i;
            while (k <= j) {
                arr1[k] = arr1[k] === 0 ? 1 : 0;//取反
                k++;
            }
            let sum2 = erjz(arr1)
            if(sum2 > sum){
                sum = sum2;
                res = arr1.join("");
            }
        }
    }
    return res;
}
console.log(maxLexicographical('10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'));
//66.67%