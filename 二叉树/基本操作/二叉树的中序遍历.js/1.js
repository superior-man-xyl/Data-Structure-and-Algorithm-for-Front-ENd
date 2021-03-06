// # 递归实现二叉树的中序遍历
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
 * @return {number[]} array
 */
var inorderTraversal = function(root,array=[]) {
    if(root){
        inorderTraversal(root.left,array);
        array.push(root.val);
        inorderTraversal(root.right,array)
    }
    return array;
};