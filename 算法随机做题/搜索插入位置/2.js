//二分二分查找优化
var searchInsert = function (nums, target) {
    let result = nums.indexOf(target);
    if (result == -1) {
        const n = nums.length;
        let left = 0,
            right = n - 1;
        result = n;
        while (left <= right) {
            let mid = Math.floor((right - left) / 2) + left;
            if (target <= nums[mid]) {
                result = mid;
                right = mid - 1
            } else {
                left = mid + 1;
            }
        }
        return result;
    } else {
        return result;
    }
};
console.log(searchInsert([1, 3, 5, 6], 5));