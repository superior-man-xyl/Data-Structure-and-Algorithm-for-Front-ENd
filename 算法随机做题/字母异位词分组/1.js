/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        //把每一项按照规律，改变，异位词被改变后是相同的字符串
        let result = strs[i].split('').map(item => item.charCodeAt()).sort().join('');
        if (map.has(result)) {
            map.get(result).push(strs[i]);
        } else {
            map.set(result, [strs[i]]); //map里存一个数组
        }
    }
    return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));