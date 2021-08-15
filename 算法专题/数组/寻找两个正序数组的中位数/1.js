/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 暴力解题 合并有序数组，再找出中位数
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [].concat(nums1, nums2).sort((a, b) => a - b);
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    let local = len / 2
    if (String(local).indexOf('.') === -1) {
        return (nums[local] + nums[local - 1]) / 2;
    } else {
        return nums[Math.floor(local)];
    }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));