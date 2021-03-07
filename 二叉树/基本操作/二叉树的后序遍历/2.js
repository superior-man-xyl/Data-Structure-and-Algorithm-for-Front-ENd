//迭代方式，使用栈
var postorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let last = null; // 标记上一个访问的节点
    let current = root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack[stack.length - 1];
      if (!current.right || current.right == last) {
        current = stack.pop();
        result.push(current.val);
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;
      }
    }
    return result;
  }
