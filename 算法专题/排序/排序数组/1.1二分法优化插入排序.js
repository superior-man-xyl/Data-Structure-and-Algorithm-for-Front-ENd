//使用二分法优化插入排序
var sortArray = function (nums) {
    let len = nums.length;
    for (let i = 1; i < len; i++) {
        let left = 0,
            right = i - 1,
            key = nums[i];
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (key < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (let j = i - 1; j >= left; j--) {
            nums[j + 1] = nums[j]
        }
        nums[left] = key;
    }
    return nums;
};
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [ 0, 0, 1, 1, 2, 5 ]