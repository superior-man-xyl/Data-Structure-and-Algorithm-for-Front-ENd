/**
 * @param {string} s
 * @return {number}
 */

//思路是使用一个hashMap的数据结构，然后从左往右加，如果当前值小于右边的，那么就为减
var romanToInt = function (s) {
    const Map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    s = s.split('');
    let value = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (i == len - 1) {
            value += Map[s[i]];
        } else {
            if (Map[s[i]] < Map[s[i + 1]]) {
                value = value - Map[s[i]];
            } else {
                value=value+Map[s[i]];
            }
        }
    }
    return value;
};
console.log(romanToInt("LVIII"));