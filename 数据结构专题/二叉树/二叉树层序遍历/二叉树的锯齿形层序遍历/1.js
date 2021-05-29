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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const arr = [];
    if (!root) {
        return arr;
    }
    const queue = [root];
    let isZig = true;
    while (queue.length !== 0) {
        const currentLevelSize = queue.length;
        arr.push([]);
        for (let i = 0; i <= currentLevelSize; i++) {
            const node = queue.shift();
            if (isZig) {
                arr[arr.length - 1].push(node.val);
            } else {
                arr[arr.length - 1].unshift(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        isZig = !isZig;
    }
    return arr;
};