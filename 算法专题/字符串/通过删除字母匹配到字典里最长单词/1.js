// 全遍历加双指针
var findLongestWord = function (s, dictionary) {
    let res = '';
    for (let word of dictionary) {
        if (isSub(s, word)) {
            if (word.length > res.length || word.length == res.length && word < res) {
                res = word;
            }
        }
    }
    return res;
};

function isSub(s, word) {
    let i = s.length,
        j = word.length;
    while (i >= 0 && j >= 0) {
        if (s[i] === word[j]) {
            j--;
        }
        i--;
    }
    return j === -1;
}
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));