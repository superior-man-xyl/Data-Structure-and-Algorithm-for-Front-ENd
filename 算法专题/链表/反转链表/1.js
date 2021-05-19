/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//使用栈来反转
var reverseList = function (head) {
    if (head == null) {
        return head;
    }
    var cur = head;
    var stack = [];
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    head = stack.pop();
    cur = head
    while (stack.length > 0) {
        cur.next = stack.pop();
        cur = cur.next;
    }
    cur.next = null; //解决尾节点循环
    return head;
};