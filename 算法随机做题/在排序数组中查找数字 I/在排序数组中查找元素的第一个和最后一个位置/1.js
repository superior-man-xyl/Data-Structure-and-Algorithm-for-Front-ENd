/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0,
        end = nums.length - 1;
    while (nums[start] < target && start <= end) {
        start++;
    }
    while (nums[end] > target && start <= end) {
        end--;
    }
    return start > end ? [-1, -1] : [start, end];
};