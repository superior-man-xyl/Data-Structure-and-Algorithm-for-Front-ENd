/**
 * @param {number} n
 * @return {number}
 */
//利用斐波那契数列的知识
//自顶向下
const f=[];
 var numWays = function(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    if(f[n]==undefined){
        f[n]= (numWays(n-1)+numWays(n-2))%1000000007;
        return f[n]
    }
};
console.log(numWays(7))