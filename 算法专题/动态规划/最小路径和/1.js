/**
 * @param {number[][]} grid
 * @return {number}
 */
//思路：使用动态规划，记住每条路径的大小，
// 最后返回，最小的那个值
// 对于网格的各个点来说
// x为0的点，处于路径中，上一步只有可能是从上向下走的，所以要累计上一个点
// 累加上一个点时，关于动态规划的记忆，上一个点的已经值已经变为了最小路径的值。
// 同理：
// y为0时，上一步只有可以在左边即x-1的地方，
// x和y都不为0时，就比较左边那个点的值(起点到左边那个点的最短路径)和上面那个点的值哪个更小。
var minPathSum = function (grid) {
    var x = grid[0].length;//横轴
    var y = grid.length;//纵轴
    for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			if (i === 0 && j !== 0) {
				grid[i][j] += grid[i][j - 1];
			} else if (j === 0 && i !== 0) {
				grid[i][j] += grid[i - 1][j];
			} else if (i !== 0 && j !== 0) {
				grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
			}
		}
	}
    return grid[y - 1][x - 1];
};