/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let result=nums.indexOf(target);
    if(result==-1){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>target){
                return i;
            }else if(i==nums.length-1){
                return i+1;
            }
        }
    }else{
        return result;
    }
};
console.log(searchInsert([1,3,5,6],7));