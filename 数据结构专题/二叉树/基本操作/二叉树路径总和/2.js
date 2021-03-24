var hasPathSum = function(root, targetSum) {
    if(root==null){
        return false
     }
    if(!root.right&&!root.left){
        return root.val-targetSum==0;
    }
    targetSum=targetSum-root.val;
    
    return hasPathSum(root.left,targetSum)||hasPathSum(root.right,targetSum);
};