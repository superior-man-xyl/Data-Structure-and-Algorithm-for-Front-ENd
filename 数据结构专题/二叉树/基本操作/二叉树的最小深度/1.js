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
// 有个很巧妙的方法
//例如示例二，091 24 3 2/3 24 091 2 这样走一样长的路
 var minDepth = function(root) {
    if(!root){
        return 0;//如果是空树，或后面遇到了空结点,也是最底层的计算值
    }
    if(!root.left){//左子树为空，就看看有没有右子树，这样判断是否为叶子结点
        return minDepth(root.right)+1
    }
    if(!root.right){
        return minDepth(root.left)+1;
    }
    //左右子树都不为空
    return Math.min(minDepth(root.left),minDepth(root.right))+1;//那就看那边最小，递归下去
};