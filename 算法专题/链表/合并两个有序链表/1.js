/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    //定义头节点，以确保链表可以被访问到
    let head = new ListNode();
    //定义一个'针变量'，为什么称其为针，就要看下面他的使用了
    let cur = head;
    while (l1 && l2) {
        //如果l1的节点值更小
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;//往后走一位
        } else {//l2的节点值更小
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    //解决遗留情况，即一边更长
    // if (l1 !== null) {
    //     cur.next = l1;
    // } else {
    //     cur.next = l2;
    // }
    cur.next=l1!==null?l1:l2;

    return head.next;
};