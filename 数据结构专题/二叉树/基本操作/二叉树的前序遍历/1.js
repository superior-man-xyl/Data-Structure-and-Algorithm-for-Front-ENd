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
 var preorderTraversal = function(root,array=[]) {
    if(root){
        array.push(root.val);
        preorderTraversal(root.left,array);
        preorderTraversal(root.right,array);
    }
     return array;
 }