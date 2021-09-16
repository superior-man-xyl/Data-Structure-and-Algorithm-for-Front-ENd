/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 自己思路，先通过map存储多个arr2里存在的值，用个数组存储arr2里不存在的值
var relativeSortArray = function (arr1, arr2) {
    let map = new Map();
    let res1 = [];
    let res2 = [];
    for (let value of arr2) {
        map.set(value, []);
    }
    while (arr1.length > 0) { //将其分为两个阵营
        let item = arr1.pop();
        if (map.has(item)) {
            map.get(item).push(item);
        } else {
            res1.push(item);
        }
    }
    if (res1.length > 0) {
        res1.sort((a, b) => a - b);
    }
    // 接着按照arr2的顺序重组res2
    while (arr2.length > 0) {
        let item = arr2.shift();
        res2 = res2.concat(map.get(item));
    }
    return res2.concat(res1);
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));