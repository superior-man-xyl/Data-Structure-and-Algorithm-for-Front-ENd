/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
//https://leetcode-cn.com/problems/interleaving-string/solution/shou-hua-tu-jie-dfshui-su-dfsji-yi-hua-by-hyj8/
//超出时间限制
var isInterleave = function (s1, s2, s3) {
    let n = s1.length,
        m = s2.length,
        t = s3.length;
    if (n + m != t) {
        return false;
    }

    function check(i, j, k) {
        if (k == t) {
            return true;
        }
        let isValid = false;
        if (i < n && s1[i] == s3[k]) {
            isValid = check(i + 1, j, k + 1);
        }
        if (j < m && s2[j] == s3[k]) {
            isValid = isValid || check(i, j + 1, k + 1);
        }
        return isValid;
    }
    return check(0, 0, 0);
};