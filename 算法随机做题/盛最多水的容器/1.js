/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力求解，超出时间限制
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let y = Math.min(height[i], height[j]);
            let x = j - i;
            let cj = x * y;
            max = Math.max(max, cj);
        }
    }
    return max;
};
console.log(maxArea([4, 3, 2, 1, 4]));