//DFS（深度优先搜索Depth-First-Search）
var pathSum = function(root, sum) {
    var res = [];
    dfs = (node, total, nums) => {
        total += node.val;
        nums.push(node.val);
        if (node.left || node.right) {
            node.left && dfs(node.left, total, nums.slice())
            node.right && dfs(node.right, total, nums.slice())
        } else if (total === sum) {
            res.push(nums)
        }
    }
    return root && dfs(root, 0, []) || res
};
