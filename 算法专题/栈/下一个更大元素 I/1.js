/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const result = [];
    for (const num of nums1) {
        let index = nums2.indexOf(num);
        if (index == nums2.length - 1) {
            result.push(-1);
        }
        for (let i = index + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                result.push(nums2[i]);
                break;
            }
            if (i === nums2.length - 1) {
                result.push(-1);
            }
        }
    }
    return result;
};
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));