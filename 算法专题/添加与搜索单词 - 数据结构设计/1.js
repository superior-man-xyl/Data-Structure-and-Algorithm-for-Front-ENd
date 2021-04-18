//构造函数
var WordDictionary = function () {
    // 初始化一个对象字面量，承担 Map 的角色
    this.words = {};
};

//添加字符超的方法
WordDictionary.prototype.addWord = function (word) {
    //以单词的长度为key
    if (this.words[word.length]) {
        this.words[word.length].push(word);
    } else {
        this.words[word.length] = [word]
    }
};

//搜索字符串的方法
WordDictionary.prototype.search = function (word) {
    //分word是不是字符串，或是正则表达式
    const len = word.length;
    if (!this.words[len]) { //先根据长度判断是不是有这个类型的单词
        return false;
    }
    if (!word.includes('.')) { //根据有没有.判断是不是正则
        //非正则
        return this.words[len].includes(word);
    }
    //是正则
    const reg = new RegExp(word); //创建正则表达式对象
    //只要数组中有一个匹配正则表达式的字符串，就返回true
    return this.words[len].some((item) => {
        return reg.test(item);
    })
};