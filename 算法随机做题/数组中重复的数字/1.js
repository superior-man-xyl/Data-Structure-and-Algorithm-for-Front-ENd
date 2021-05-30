/**
 * @param {number[]} nums
 * @return {number}
 */
//击败5%，过于暴力
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));