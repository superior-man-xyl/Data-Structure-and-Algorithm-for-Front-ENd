var reverseList = function (head) {
    let cur = head;
    let pre = null; //初始为空节点
    while (cur) {
        const next = cur.next; //记录下原来下一个节点
        cur.next = pre; //改变指向到上一个节点
        pre = cur;
        cur = next;
    }
    return pre;
};