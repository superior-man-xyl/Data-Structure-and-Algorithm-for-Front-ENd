/**
 * @param {number[]} nums
 * @return {boolean}
 */
//选择一个值为中心，分成两边数组，左边取最小，右边找到适合的值
//暴力，时间超时，不通过
var find132pattern = function (nums) {
    let length = nums.length;
    if (length < 3) {
        return false;
    }
    for (let j = 1; j < length-1; j++) {
        let arr1 = nums.slice(0, j);
        let arr2 = nums.slice(j + 1).sort((a, b) => a - b);
        let min = Math.min(...arr1);
        if (min < nums[j]) {
            for (let i = 0; i < arr2.length; i++) {
                if (arr2[i] < nums[j] && arr2[i] > min) {
                    return true;
                }
            }
        }
    }
    return false;
};
console.log(find132pattern([3, 1, 4, 2]));