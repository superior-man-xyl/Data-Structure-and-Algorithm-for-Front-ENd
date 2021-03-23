// 非递归方法,使用迭代，栈的方式
var inorderTraversal = function(root){
    const stack=[];
    const result=[];
    while(root||stack.length>0){
        while(root){
            stack.push(root);
            root=root.left;
        }
        root=stack.pop();
        result.push(root.val);
        root=root.right;
    }
    return result;
}