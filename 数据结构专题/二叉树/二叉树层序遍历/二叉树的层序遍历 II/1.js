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
var levelOrderBottom = function (root) {
    const arr = [];
    if (!root) {
        return arr;
    }
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        arr.push([]);
        const maxLevelSize = queue.length;
        for (let i = 1; i <= maxLevelSize; i++) {
            let node = queue.shift();
            arr[arr.length - 1].push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return arr.reverse();//和I的差别
};