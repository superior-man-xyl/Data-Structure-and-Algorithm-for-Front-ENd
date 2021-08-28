/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//使用哈希，但没能利用其有序数组的特点
var twoSum = function (numbers, target) {
    const map = new Map();
    const len = numbers.length;
    for (let i = 0; i < len; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]), i + 1];
        } else {
            map.set(numbers[i], i + 1);
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));