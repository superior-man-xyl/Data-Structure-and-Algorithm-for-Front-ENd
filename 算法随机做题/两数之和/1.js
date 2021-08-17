/**声明参数
 * @author xyl
 * @date 2020-11-20
 * @param {number[]} nums //大括号内写类型，外面跟名字
 * @param {number} target
 * @return {number[]} 
 */
//哈希法  复杂度O(n)

const twoSum = (nums, target) => {
    const map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else { //没有就存入
            map.set(nums[i], i);
        }
    }
    return [];
}