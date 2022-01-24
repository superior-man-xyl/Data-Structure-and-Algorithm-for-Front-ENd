/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length;
    // 对数组排序
    nums.sort((a, b) => {
        return a - b
    })
    // 初始化的时候 认为前三个数的就是要的结果
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < len; i++) {
        // 双指针思想 
        let start = i + 1;
        let end = len - 1;

        while (start < end) {
            let tempSum = nums[i] + nums[start] + nums[end]
            // 最接近，换一句话说就是相减绝对值最小。
            // 在不停地执行while循环的过程中，不断的更新 ans
            if (Math.abs(target - tempSum) < Math.abs(target - ans)) {
                ans = tempSum
            }
            if (tempSum > target) {
                end--
            } else if (tempSum < target) {
                start++
            } else { // 正好和target相等 返回ans
                return ans
            }
        }
    }
    return ans
};