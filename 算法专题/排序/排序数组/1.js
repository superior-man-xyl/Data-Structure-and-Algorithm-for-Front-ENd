/**
 * @param {number[]} nums
 * @return {number[]}
 */
//使用插入排序  双for  o(n^2)
 var sortArray = function(nums) {
    for(let i=1;i<nums.length;i++){
        let target=i;
        for(let j=i-1;j>=0;j--){
            if(nums[target]<nums[j]){
               [nums[target],nums[j]]= [nums[j],nums[target]];
                target=j;
            }else{
                break;
            }
        }
    }
    return nums;
};