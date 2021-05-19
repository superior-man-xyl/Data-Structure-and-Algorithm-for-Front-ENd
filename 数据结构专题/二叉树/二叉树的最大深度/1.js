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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0; //作为处理空树和递归结束条件
    } else if (!root.left) {
        return maxDepth(root.right) + 1;
    } else if (!root.right) {
        return maxDepth(root.left) + 1;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};