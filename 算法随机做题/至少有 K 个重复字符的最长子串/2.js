//分治法解决
var longestSubstring = function (s, k) {
    const n = s.length;
    return dfs(s, 0, n - 1, k);
}

const dfs = (s, l, r, k) => {
    const cnt = new Array(26).fill(0);
    for (let i = l; i <= r; i++) {
        cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let split = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > 0 && cnt[i] < k) {
            split = String.fromCharCode(i + 'a'.charCodeAt());
            break;
        }
    }
    if (split == 0) {
        return r - l + 1;
    }

    let i = l;
    let ret = 0;
    while (i <= r) {
        while (i <= r && s[i] === split) {
            i++;
        }
        if (i > r) {
            break;
        }
        let start = i;
        while (i <= r && s[i] !== split) {
            i++;
        }

        const length = dfs(s, start, i - 1, k);
        ret = Math.max(ret, length);
    }
    return ret;
};