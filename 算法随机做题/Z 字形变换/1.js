/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let arr = [];
    s = s.split('');
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }
    let index = 0;
    let cur = true; //作为判断方向的依据
    while (s.length > 0) {
        arr[index].push(s.shift());
        if (cur) {
            index++;
        } else {
            index--;
        }
        if (index >= numRows - 1) {
            cur = false;
        }
        if (index == 0) {
            cur = true;
        }
    }
    return arr.flat(Infinity).join(''); //数组去重，转为字符串
};
console.log(convert('AB', 1));