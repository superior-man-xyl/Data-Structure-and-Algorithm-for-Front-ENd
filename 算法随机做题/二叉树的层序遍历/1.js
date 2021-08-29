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
//广度优先搜索
var levelOrder = function (root) {
    const arr = [];
    if (!root) {
        return arr;
    }
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        //每次回到这里，都是仅包含一层的所有节点，所以要记好数量
        const currentLevelSize = queue.length;
        arr.push([]);
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = queue.shift();
            arr[arr.length - 1].push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return arr;
};