/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;//方便后面使用j
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] != strs[i][j]){
                break;
            }
        }
        ans = ans.substr(0, j);//切取从开始位置指定位数的字符串
        if (ans === ""){
            return ans;
        }
    }
    return ans;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))