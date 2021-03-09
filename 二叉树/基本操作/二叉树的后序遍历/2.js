//迭代方式，使用栈
var postorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let last = null; // 标记上一个访问的节点
    let current = root;
    while (current || stack.length > 0) {
      while (current) {//为空退出循环，已经找到最左叶子结点
        stack.push(current);
        current = current.left;
      }
      current = stack[stack.length - 1];//因为current为空，所以要赋值
      if (!current.right || current.right == last) {
        current = stack.pop();
        result.push(current.val);
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;//说明已经遍历回了顶点
      }
    }
    return result;
  }
