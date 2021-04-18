/**
 * @param {string} s
 * @return {boolean}
 */
//使用双指针法，和回文字符串的特性
var validPalindrome = function (s) {
    //先写一个工具函数  用于判断某某区间是否是回文字符串
    function isPalindrome(start, end) { //这两个是两个指针的位置
        while (start < end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++;
            end--;
        }
        return true;
    }
    //开始进行
    let i = 0; //初始化左指针
    let j = s.length - 1; //初始化右指针
    while (i < j && s[i] === s[j]) {
        i++;//都向中间移动
        j--;
    }
    //跳出循环要不是说明ij会和了，要不然就是出现了不相等
    if (isPalindrome(i + 1, j)) { //左指针跳过一位看看会不会回文
        return true;
    }
    if (isPalindrome(i, j - 1)) { //右指针跳过一位看看会不会回文
        return true;
    }
    return false;
};

console.log(validPalindrome("cbbcc"))