/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target == nums[i]) {
            while (i < nums.length) {
                if (target == nums[i]) {
                    start++;
                    i++;
                } else {
                    break;
                }
            }
        }
    }
    return start
};
console.log(search([5, 7, 7, 8, 8, 10], 8));