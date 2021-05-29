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
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER; //初始化最大路径和
    let helper = function (root) {
        if (root == null) {
            return 0;
        }
        //判断增益
        let leftSum = Math.max(helper(root.left), 0);
        let rightSum = Math.max(helper(root.right), 0);
        let newSum = root.val + leftSum + rightSum;
        //选出最大记录
        maxSum = Math.max(newSum, maxSum);
        return root.val + Math.max(leftSum, rightSum);
        //将增益返回
    }
    helper(root);
    return maxSum;
};