//这和1.js差不多，只优化了2000ms
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        nums.splice(i, 1);
        i--;
        if (nums.indexOf(num) !== -1) {
            return num;
        }
    }
};
console.log(findRepeatNumber([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));