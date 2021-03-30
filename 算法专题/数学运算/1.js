/**
 * @param {number} n
 * @return {number}
 */
//递归加 &&短路
 var sumNums = function(n) {
    return n&&(n+sumNums(n-1));
};