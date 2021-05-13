//使用双指针
var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (nums[left] < target) {
        left++;
    }
    while (nums[right] > target) {
        right--;
    }
    return right - left >= 0 ? right - left + 1 : 0;
};