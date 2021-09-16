// 不寻常的乘法表，输出最大值
let arr = "8 9".split(" ");
let N = parseInt(arr[0]);
let K = parseInt(arr[1]);
let res = [];
for(let i = 0; i <= K; i++){
    res.push(N*i);
}
res = res.map((item)=>{
    let cur = parseInt(item.toString().split('').reverse().join(''));
    return cur;
})
console.log(Math.max(...res));
