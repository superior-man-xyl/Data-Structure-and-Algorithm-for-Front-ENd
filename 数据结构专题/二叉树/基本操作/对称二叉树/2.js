var isSymmetric = function(root) {
    function isMirror(r1, r2) {
        if(!r1 && !r2) return true
        if(!r1 || !r2) return false

        return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
    }

    return isMirror(root, root)
};