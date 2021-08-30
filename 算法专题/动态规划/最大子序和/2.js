//类似「滚动数组」的思想， 一直记忆之前的最大值，即i之前的最大值，且维护着空间复杂度为1
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        //if(sum+num>num)
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        // console.log(sum,'++++',ans);
        ans = Math.max(ans, sum);
    }
    return ans;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));