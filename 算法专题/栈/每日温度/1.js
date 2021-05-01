/**
 * @param {number[]} T
 * @return {number[]}
 */
// 1504ms  粗暴法，双for比较

 var dailyTemperatures = function(T) {
    let arr=[];
    let len=T.length;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            if(T[i]<T[j]){
                arr.push(j-i);
                console.log(j-i,'++++');
                break;
            }else if(j==len-1){
                arr.push(0);
            }
        }
    }
    arr.push(0);
    return arr;
};
console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));