//双指针法 1
// 时间复杂度：O(n)，其中 n 为序列的长度。我们只需要遍历该序列至多两次。
// 最坏情况下（输入数组中没有元素等于val），左右指针各遍历了数组一次。
var removeElement = function (nums, val) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));