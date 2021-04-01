/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//自上而下

//深度计算函数
function depth(root){
    if(!root){
        return 0;
    }
    //取左右子树深度较大的值，作为返回结果加一
    return Math.max(depth(root.left),depth(root.right))+1;
}

var isBalanced = function(root) {
    if(!root){
        return true;
    }
    //计算两边深度差
    //并且判断是平衡
    return Math.abs(depth(root.left)-depth(root.right))<2&&isBalanced(root.left)&&isBalanced(root.right);
};