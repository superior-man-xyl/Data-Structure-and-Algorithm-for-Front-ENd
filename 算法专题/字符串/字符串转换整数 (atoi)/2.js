/**
 * @param {string} s
 * @return {number}
 */
// 入参是一个字符串
const myAtoi = function(str) {
    // 编写正则表达式 
    // \s匹配任何空白字符 ？表示有或没有，*表示0到多次 .代表 \n 之外任意
    const reg = /\s*([-\+]?[0-9]*).*/
    //+表示匹配前面的子表达式一次或多次,要匹配 + 字符，请使用 \+
    // 得到捕获组  ()内的元素会位于数组第二位
    const groups = str.match(reg)
    // 计算最大值
    const max = Math.pow(2,31) - 1
    // 计算最小值
    const min = -max - 1
    // targetNum 用于存储转化出来的数字
    let targetNum = 0
    // 如果匹配成功
    if(groups) {
        // 尝试转化捕获到的结构
        targetNum = +groups[1]//+('+123')=>123  +('++123')=>NaN
        // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
        if(isNaN(targetNum)) {
            // 不能进行有效的转换时，请返回 0
            targetNum = 0
        }
    }
    // 卡口判断
    if(targetNum > max) {
        return max
    } else if( targetNum < min) {
        return min
    }
    // 返回转换结果
    return targetNum
};