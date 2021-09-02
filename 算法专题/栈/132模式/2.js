//暴力法优化,超出时间限制
var find132pattern = function (nums) {
    let len = nums.length;
    if (len < 3) {
        return false;
    }
    let min = nums[0];
    for (let i = 1; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (min < nums[j] && nums[i] > nums[j]) {
                return true;
            }
        }
        min = Math.min(min, nums[i]);
    }
    return false;
};