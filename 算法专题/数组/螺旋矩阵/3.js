var spiralOrder = function (matrix) {
    if (matrix.length == 0) return []
    const res = []
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
        top++
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
        right--
        if (top > bottom || left > right) break //注意这个break
        for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
        bottom--
        for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
        left++
    }
    return res
};