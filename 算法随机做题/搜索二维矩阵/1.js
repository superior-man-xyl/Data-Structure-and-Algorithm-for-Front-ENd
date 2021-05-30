/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0) {
        return false;
    }
    let x = 0,
        y = 0;
    while (x < matrix[0].length && y < matrix.length) {
        if (matrix[y][x] == target) {
            return true;
        } else if (matrix[y][x] > target) {
            return false;
        }
        if (matrix[y][x] < target && x < matrix[0].length - 1) {
            x++;
        } else if (matrix[y][x] < target && x == matrix[0].length - 1) {
            y++;
            x = 0;
        }
    }
    return false
};