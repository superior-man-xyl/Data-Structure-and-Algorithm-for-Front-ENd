/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 直接使用js的regexp对象，但其实应该用动态规划的思路，而不是用现成的
 var isMatch = function (s, p) {
    let reg = new RegExp(`^${p}$`);
    return reg.test(s);
};
console.log(isMatch("ab",".*"))