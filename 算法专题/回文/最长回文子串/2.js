// 两种情况
// 一种是回文子串长度为奇数（如aba，中心是b）
// 另一种回文子串长度为偶数（如abba，中心是b，b）

// 循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断

var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }

    let res = ''
    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间
        //   长度是n-m-1
        if (n - m - 1 > res.length) {//因为最后取值nm都不在内，因为其不相等
            // slice也要取[m+1,n-1]这个区间 
            res = s.slice(m + 1, n)
        }
    }
    for (let i = 0; i < s.length; i++) {
        // 回文子串长度是奇数
        helper(i, i)//假设每个点都是中心
        // 回文子串长度是偶数
        helper(i, i + 1)
    }

    return res
};
console.log(longestPalindrome("babad"));