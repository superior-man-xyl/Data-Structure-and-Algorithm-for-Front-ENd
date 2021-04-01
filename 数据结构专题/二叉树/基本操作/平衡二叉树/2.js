//自下而上
//判断是否平衡
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    return depth(root)!==-1;//判断是否平衡
};

var depth=function(root){
    if(!root){
        return 0;
    }
    //计算左子树的深度
    const left=depth(root.left);
    //计算右子树的深度
    const right=depth(root.right);
    //一直递归到最底层，开始其终止条件，和返回结果
    switch(true){
        case left==-1:
            return -1;
        case right==-1:
            return -1;
        case Math.abs(left-right)>1:
            return -1;
        default:
            return Math.max(left,right)+1;
    }
}