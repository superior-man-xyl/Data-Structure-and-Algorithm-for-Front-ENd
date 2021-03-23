/**
 * @param {number[]} postorder
 * @return {boolean}
 */
/**
 * 思路：
 * 1. root为最后一个数字，通过最后一个数字来区分左右子树
 * 2.将左右子树分为两个数组，查询右子树是否有比root小的值，有就返回false
 * 3.然后再对左子树进行递归，右子树进行递归
 */
var verifyPostorder = function(postorder) {
    if(postorder&&postorder.length>0){
        var root=postorder[postorder.length-1];
        //接着找到比root大的那个位置
        var i;//i是全局变量
        for(i=0;i<postorder.length-1;i++){
            if(postorder[i]>root){
                break;
            }
        }
        for(var j=i;i<postorder.length-1;j++){
            if(postorder[j]<root){
                return false;
            }
        }
        var left=true;
        if(i>0){
            left=verifyPostorder(postorder.slice(0,i));
        }
        var right=true;
        if(i<postorder.length-1){
           right= verifyPostorder(postorder.slice(i,postorder.length-1));
        }
        return left&&right;
    }
        return true;//空数组默认为是
};