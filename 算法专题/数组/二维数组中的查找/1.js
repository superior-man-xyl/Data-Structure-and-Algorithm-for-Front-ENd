/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//以左下角为起点查找
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length == 0) {
        return false;
    }
    let x = 0;
    let y = matrix.length - 1;
    while(x<matrix[0].length&&y>=0){
        if(matrix[y][x]==target){
            return true;
        }else if(matrix[y][x]>target){
            y--;
        }else if(matrix[y][x]<target){
            x++;
        }
    }
    return false;
};
