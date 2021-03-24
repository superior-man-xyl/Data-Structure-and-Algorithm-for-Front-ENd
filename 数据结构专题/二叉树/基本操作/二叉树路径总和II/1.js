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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum,arr=[],result=[]) {
    if(!root){
        return arr;
    }
    if(!root.left&&!root.right){
        arr.push(root.val);
        var sum=arr.reduce((acc,cur)=>{
           return acc+=cur;
        })
        if(sum==targetSum){
            result.push(arr);
        }
        return result;
    }
    root.left&&pathSum(root.left,targetSum,[...arr,root.val],result);
    root.right&&pathSum(root.right,targetSum,[...arr,root.val],result);
    return result;
};