/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const arr = [];
    if (!root) {
        return arr;
    }
    const queue = [root];
    while (queue.length !== 0) {
        const currentLevelSize = queue.length;
        let levelAver = 0;
        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift();
            levelAver += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        arr.push(levelAver / currentLevelSize);
    }
    return arr;
};