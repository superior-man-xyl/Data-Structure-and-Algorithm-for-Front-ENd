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
 * @return {boolean}
 */
//使用动态规划的思想，将叶子结点的值累加为路径值总和
 var hasPathSum = function(root, targetSum) {
    if(root==null){
        return false
     }
    if(!root.right&&!root.left){//检测是否为叶子结点
        return root.val==targetSum;
    }
    if(root.left){//改变值
        root.left.val+=root.val;//注意这个val才是值，.left是对象
    }
    if(root.right){
        root.right.val+=root.val;
    }
    return hasPathSum(root.left,targetSum)||hasPathSum(root.right,targetSum);
};