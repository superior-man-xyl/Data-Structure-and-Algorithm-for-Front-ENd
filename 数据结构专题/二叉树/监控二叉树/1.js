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
var minCameraCover = function (root) {
    const dfs = (root) => {
        if (!root) {
            return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0];
        }
        const [la, lb, lc] = dfs(root.left);
        const [ra, rb, rc] = dfs(root.right);
        const a = lc + rc + 1;
        const b = Math.min(a, Math.min(la + rb, ra + lb));
        const c = Math.min(a, lb + rb);
        return [a, b, c];
    }
    return dfs(root)[1];
};