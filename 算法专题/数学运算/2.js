//求和公式为 n(n+1)/2 = (n方+n)/2
//怎么除2呢？ 用位运算
var sumNums = function(n) {
    return (Math.pow(n,2)+n)>>1;
};