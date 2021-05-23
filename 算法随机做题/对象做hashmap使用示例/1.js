// 找出一个数字数组中出现次数最多的数字
function MaxNums(arr) {
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    obj = Object.entries(obj);
    return (obj.reduce((x, y) => {
        if (x[1] > y[1]) {
            return x
        } else {
            return y;
        }
    }))[0]
}