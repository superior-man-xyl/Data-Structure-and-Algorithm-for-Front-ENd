/**
 * 构造函数
 */
 const WordDictionary = function () {
    // 初始化一个对象字面量，承担 Map 的角色
    this.words = {}
  };
  
  /**
    添加字符串的方法
   */
  WordDictionary.prototype.addWord = function (word) {
    // 若该字符串对应长度的数组已经存在，则只做添加
    if (this.words[word.length]) {
      this.words[word.length].push(word)
    } else {
      // 若该字符串对应长度的数组还不存在，则先创建
      this.words[word.length] = [word]
    }
  
  };
  
  /**
    搜索方法
   */
  WordDictionary.prototype.search = function (word) {
    // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
    if (!this.words[word.length]) {
      return false
    }
    // 缓存目标字符串的长度
    const len = word.length
    // 如果字符串中不包含‘.’，那么一定是普通字符串
    if (!word.includes('.')) {
      // 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
      return this.words[len].includes(word)
  
    }
  
    // 否则是正则表达式，要先创建正则表达式对象
    const reg = new RegExp(word)
  
    // 只要数组中有一个匹配正则表达式的字符串，就返回true
    return this.words[len].some((item) => {
      return reg.test(item)
    })
  };