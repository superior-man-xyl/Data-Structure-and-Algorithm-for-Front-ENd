//使用单调栈  依然超时
var find132pattern = function (nums) {
    let minIdx = 0;
    let stack = [];
    let len = nums.length;
    while (minIdx < len) {
        stack = []; //清空栈的操作
        for (let i = minIdx; i < len; i++) {
            if (!stack.length) {
                stack[0] = nums[i];
            }
            if (nums[i] > stack[0] && stack.length == 1) {
                stack[1] = nums[i];
            }
            if (nums[i] > stack[1] && stack.length == 2 && i !== len - 1) {
                stack[1] = nums[i];
            }
            if (nums[i] > stack[0] && nums[i] < stack[1]) {
                return true;
            }
            if (minIdx == len - 2) {
                return false;
            }
        }
        minIdx++;
    }
    return false;
};