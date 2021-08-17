//双指针法  O(n)
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let left = 0,
        right = len - 1;
    while (left < right) {
        //相加等于目标值就直接返回
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] < target) {
            //相加小于目标值说明left需要右移
            left++;
        } else {
            //相加大于目标值说明right需要左移
            right--;
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));