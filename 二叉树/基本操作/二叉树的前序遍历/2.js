// 非递归方法,使用迭代，栈的方式
var preorderTraversal = function(root) {
   const result=[];
   const stack=[];
   while(root||stack.length>0){
        while(root){
            result.push(root.val);
            stack.push(root);
            root=root.left;
        }
        root=stack.pop();
        root=root.right;//这里这样操作就不会重复录入左子树的值
   }
    return result;
};