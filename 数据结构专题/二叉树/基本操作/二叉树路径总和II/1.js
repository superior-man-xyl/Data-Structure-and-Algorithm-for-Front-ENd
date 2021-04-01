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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum,arr=[],result=[]) {
    if(!root){//如果开始为空树
        return arr;
    }
    if(!root.left&&!root.right){//说明其是叶子结点
        arr.push(root.val);//作为最后一个元素添加进arr数组，
        var sum=arr.reduce((acc,cur)=>{
           return acc+=cur;//得到其和
        })
        if(sum==targetSum){//如果和为目标值，就加入到结果数组
            result.push(arr);
        }
        //既然都是叶子结点了，那么就直接返回值，没必要走下一步了
        return result;
    }
    //如果有左子树 以递归到最底部
    root.left&&pathSum(root.left,targetSum,[...arr,root.val],result);
    //返回result是直接以result形式返回，就存在了上一个作用域
    //如果有右子树
    root.right&&pathSum(root.right,targetSum,[...arr,root.val],result);
    //返回最后的result
    return result;
};