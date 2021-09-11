/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') {
        return 0;
    }
    let hlen = haystack.length;
    let nlen = needle.length;
    for (let i = 0; i + nlen <= hlen; i++) {
        let flag = true;
        for (let j = 0; j < nlen; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
console.log(strStr("a", "a"));