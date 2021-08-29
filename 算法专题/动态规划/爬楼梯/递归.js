// 最简单解法
var climbStairs = function(n) {
    if(n===1){
        return 1;
    }
    if(n===2){
        return 2;
    }
    return climbStairs(n-1)+climbStairs(n-2);
};
//当n的数值过大时，就会出现问题，发生栈溢出，无法得到结果
//原因是太多重复运算，解决方法就是记录下重复运算的值，到时直接用，这就是动态规划