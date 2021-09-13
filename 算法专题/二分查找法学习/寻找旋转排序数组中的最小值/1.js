/**
 * @param {number[]} nums
 * @return {number}
 */
// 通过二分法加题目背景找最小值
var findMin = function (nums) {
    let low = 0;
    let height = nums.length - 1;
    while (low < height) {
        let mid = low + Math.floor((height - low) / 2);
        if (nums[mid] < nums[height]) {
            height = mid;
        } else {
            low = mid + 1;
        }
    }
    return nums[low];
};