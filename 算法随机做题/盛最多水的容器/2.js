// 双指针
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--];
        let area = (j - i + 1) * minHeight;
        max = Math.max(max, area);
    }
    return max;
};
console.log(maxArea([4, 3, 2, 1, 4]));