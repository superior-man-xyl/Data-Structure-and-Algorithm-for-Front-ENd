/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //preorder and inorder is array
    if(preorder.length==0){
        return null;
    }
    if(preorder.length==1){
        return new TreeNode(preorder[0]);
    }
    const value=preorder[0];
    const node=new TreeNode(value);//将根节点写入树
    //分开两边的树的各自前中序遍历
    const index=inorder.indexOf(value);
    const preleft=preorder.slice(1,index+1);//把根结点0留下
    const preright=preorder.slice(index+1);
    const inleft=inorder.slice(0,index);
    const inright=inorder.slice(index+1)//留下根节点index
    //左右两边的树继续进行操作
    node.left=buildTree(preleft,inleft);
    node.right=buildTree(preright,inright);
    return node
};