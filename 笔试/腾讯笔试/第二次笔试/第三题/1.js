let key = Math.pow(10, 9) + 7;
let n = 10
let x = 2
let y = 3
let res1 = [];
let res2 = [];
for (let i = 1; i <= n; i++) {
    res1.push((x * i) % key);
}
for (let i = 1; i <= n; i++) {
    res2.push((y * i) % key)
}
let res = res1.concat(res2);
res.sort((a, b) => a - b)
console.log(res[n-1],res);