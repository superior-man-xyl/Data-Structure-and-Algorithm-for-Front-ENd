/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const key = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    let size = digits.length;
    if (size == 0) {
        return [];
    }
    digits = digits.split('');
    let arr = key[digits[0]];
    for (let i = 1; i < size; i++) {
        arr = arr.map((item, index) => {
            let arr2 = [];
            let len = key[digits[i]].length;
            // console.log(key[digits[i]],'++++',len)
            for (let j = 0; j < len; j++) {
                arr2.push(item + key[digits[i]][j])
            }
            return arr2;
        }).flat(Infinity);
    }
    return arr;
};
console.log(letterCombinations('23'));