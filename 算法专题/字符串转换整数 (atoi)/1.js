const myAtoi = function (str) {
    str = str.trim(); //去除两边的空格
    let max = Math.pow(2, 31) - 1;
    //根据parseInt的特点，如果数值前有+或-是可以解析的，如果是多个-+就为NaN    
    if (isNaN(parseInt(str))) {
        //判断字符串是否符合可转化的范围
        return 0;
    } else {
        str = parseInt(str)
    }
    //判断数值是否在范围中
    if (str > max) {
        return max;
    } else if (str < -max - 1) {
        return -max - 1;
    } else {
        return str;
    }
}
console.log(myAtoi("-+12a"));