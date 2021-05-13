//选择排序
var sortArray = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        //外循环决定着范围的变化，范围由[0,len]到[1,len]到...再到[len-1,len]
        //范围逐步缩小，每次都是找出最小的放在当前范围的头部
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            //找出最小值的位置
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
};