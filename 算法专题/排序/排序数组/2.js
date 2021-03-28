//普通解法，使用sort排序 
//sort的底层是归并排序
var sortArray = function(nums) {
    return nums.sort((a,b)=>{
        return a-b;
    })
};