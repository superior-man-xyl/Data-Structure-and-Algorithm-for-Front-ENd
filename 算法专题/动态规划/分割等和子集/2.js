/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 1. 首先排除长度小于2，总和为奇数，最大数大于总和的一半，这几种情况直接返回false
 * 2. 
*/
var canPartition = function (nums) {
    const n = nums.length;
    if (n < 2) {  // 长度小于2，那么就不能分割
        return false;
    }
    let sum = 0,
        maxNum = 0;
    for (const num of nums) { // 得到总和，以及最大数
        sum += num;
        maxNum = maxNum > num ? maxNum : num;
    }
    if (sum % 2 != 0) { // 也可以通过按位与来判断是否为奇数  sum & 1 返回值为0就为奇数
        return false;
    }
    const target = sum / 2;
    if (maxNum > target) { // 最大值都大于target目标值了，就不可能分割等和了
        return false;
    }
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[target];
};