/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//如何优化时间复杂度为O(nums1.length + nums2.length) 
//只能使用单调栈, 将nums2的值全部计算出右边更大元素存在map里
var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    let stack = [];
    let map = new Map();
    for (const num of nums2) {
        //当栈内元素没有遇到更大的值时，就是入栈操作，遇到后就出栈，出空所有比当前num小的
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    // stack.forEach((item) => { //栈内剩下的就都是右边没有更大元素的了
    //     map.set(item, -1);
    // })
    result = nums1.map((item) => {
        return map.get(item) || -1;
    })
    return result;
};
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))