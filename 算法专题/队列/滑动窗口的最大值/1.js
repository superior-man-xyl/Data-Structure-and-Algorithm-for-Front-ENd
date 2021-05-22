/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//粗暴解法，双指针加遍历
var maxSlidingWindow = function(nums, k) {
    if(nums.length==0){//防止特殊情况
        return nums;
    }
    let result=[];
    let len=nums.length-k+1;
    for(let i=0;i<len;i++){
        result.push(Math.max(...(nums.slice(i,k))));
        k++;
    }
    return result;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));