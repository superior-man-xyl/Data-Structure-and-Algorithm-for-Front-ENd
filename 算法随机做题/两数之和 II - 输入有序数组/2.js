// 二分查找  O(nlogn)
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let left = 0,
        right = len - 1,
        mid = 0;
    for (let i = 0; i < len; i++) {
        left = i + 1;//left 初始为i(基准点)的右边，后面通过二分法缩小范围
        while (left <= right) {
            mid = parseInt((right - left) / 2) + left;
            if (numbers[mid] === target - numbers[i]) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));