function solve(a) {
    // write code here
    let arr = [];
    for (let item of a) {
        if (Object.getOwnPropertyNames(item).length > 0) {
            let cur = item;
            while (cur.next !== null) {
                arr.push(cur.val);
                cur = cur.next;
            }
            arr.push(cur.val);
            //这里获得所有的节点值，成立为数组
        }
    }
    //为数组去重
    arr = [...new Set(arr)];
    arr.sort((a, b) => a - b);
    // 再重新生产新链表
    let node = new ListNode(arr.shift());
    let cur = node;
    while (arr.length > 0) {
        cur.next = new ListNode(arr.shift());
        cur = cur.next;
    }
    return node;
}