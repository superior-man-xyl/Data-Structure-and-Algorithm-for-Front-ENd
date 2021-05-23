var removeElement = function (nums, val) {
    let left = 0,
        right = nums.length;
    while (left < right) {
        // console.log(right, "++++")
        if (nums[left] == val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));