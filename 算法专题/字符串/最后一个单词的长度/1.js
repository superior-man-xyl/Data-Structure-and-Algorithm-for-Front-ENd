/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(' ').filter((item) => {
        return item.length > 0;
    });
    return arr[arr.length - 1].length;
};
console.log(lengthOfLastWord('   fly me   to   the moon  '));