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
var rightSideView = function (root) {
    if (!root) {
        return [];
    }
    let arr = []
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {//队列没空就说明还没遍历完
        const currentLevelSize = queue.length;//计算每一层的节点数量
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = queue.shift();
            if (i == currentLevelSize) {
                //添加每一层最右边的元素
                arr.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return arr;
};