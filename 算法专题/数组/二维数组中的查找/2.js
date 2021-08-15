/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//数组降维，再找，不讲武德,性能差些
var findNumberIn2DArray = function (matrix, target) {
    return matrix.flat(Infinity).includes(target);
};
