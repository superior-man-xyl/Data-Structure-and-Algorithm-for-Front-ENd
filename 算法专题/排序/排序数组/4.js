//冒泡排序
// var sortArray = function(nums) {
//     let len=nums.length;
//     // 缓存数组长度,避免一直计算，浪费性能
//     for(let i=0;i<len;i++){
//         //冒泡是进行len次，每次都是从第一个开始往右冒泡。
//         for(let j=0;j<len-1;j++){
//             if(nums[j]>nums[j+1]){
//                 [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
//             }
//         }
//     }
//     return nums;
// };

//
// 优化代码，提前排好序就不再冒泡，且不再管排好序的后n个
var sortArray = function(nums) {
    let len=nums.length;
    // 缓存数组长度,避免一直计算，浪费性能
    for(let i=0;i<len;i++){
        let complete=true;
        //优化，用于判断上一次是否发生过交换顺序，以判断是否排好序
        //冒泡是进行len次，每次都是从第一个开始往右冒泡。
        for(let j=0;j<len-1-i;j++){
            //这里的内循环里条件改变，即完成了忽略后面排好序的i个元素，不再去比较
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
                complete=false;
            }
        }
        //提前排好序就退出循环，提前结束
        if(complete){
            break;
        }
    }
    return nums;
};