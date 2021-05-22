/**
 * @param {number[]} nums
 * @return {number}
 */

//暴力法解决
var maxSubArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let num = nums.slice(i, j);
            // console.log(num,'++++++++');
            let sum=add(num);
            if (max < sum) {
                max=sum;
            }
        }
    }
    return max;
};
function add(arr){
    return arr.reduce((a,b)=>{
        return a+=b;
    })
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));