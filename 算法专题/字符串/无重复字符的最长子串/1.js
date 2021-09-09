/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    s = s.split(''); //将其转为数组
    let max = 0;
    let Arr = []; //用于存贮不重复的字符
    for (let i = 0; i < s.length; i++) {
        let index = Arr.indexOf(s[i])
        if (index >= 0) { //判断是否存在
            Arr = [...Arr.slice(index + 1), s[i]]; //存在就舍弃该字符之前的值
        } else {
            Arr.push(s[i]); //不存在就将字符压入
        }
        let len = Arr.length;
        if (max < len) { //一直记录max值
            max = len;
        }
    }
    return max
};
console.log(lengthOfLongestSubstring(" "));