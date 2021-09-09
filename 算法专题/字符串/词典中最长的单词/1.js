/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let res = ''; //用于存贮结果
    let set = new Set(words); //使用Set来存储，接下来就可以用has来判断前缀是否在数组里了
    for (let word of words) {
        if (word.length < res.length || word.length === res.length && word > res) {
            continue;
        }
        let flag = true; //用于判断该word是否符合由words词典中其他单词逐步添加一个字母组成
        for (let i = 1; i <= word.length; i++) {
            let cur = word.slice(0, i);
            if (!set.has(cur)) {
                flag = false;
                break;
            }
        }
        if (flag) {
            res = word;
        }
    }
    return res;
};
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))