/**
 * @param {number[]} nums
 * @return {number}
 */

//因为要原地改变数组，那我选择splice来进行
 var removeDuplicates = function(nums) {
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([1,1,1,3,5,5]));