console.log(Infinity|0);//这样能避免出现对无穷的计算
// 比如
//  1/0=Infinity

console.log(1|0);//1

console.log(5.5|0);//5

console.log(isNaN(0*'i'));//true

console.log(isNaN('*'));//true

console.log(isNaN(Number('+')));//true

console.log(isNaN(Number(' ')));//false

console.log('*'.charCodeAt() - '0'.charCodeAt());//-6


// 在JS“&&”和“||”是逻辑运算符；“&”和“|”是位运算符。
