function treeByLevels(rootNode) {
    const arr = [];
    if (!rootNode) {
        return arr;
    }
    const queue = [];
    queue.push(rootNode);
    while (queue.length !== 0) {
        //每次回到这里，都是仅包含一层的所有节点，所以要记好数量
        const currentLevelSize = queue.length;
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = queue.shift();
            arr.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return arr;
}