//思路：得到二叉查找树的中序遍历数组，
// 该数组就是从小到大排好序的
//然后返回特定元素即可
var kthSmallest = function (root, k) {
    const stack = [];
    const result = [];
    while(root||stack.length>0){
        while(root){
            stack=stack.push(root);
            root=root.left;
        }
        root=stack.pop();
        result=result.push(root.val);
        root=root.right;
    }
    return result[k - 1];
}