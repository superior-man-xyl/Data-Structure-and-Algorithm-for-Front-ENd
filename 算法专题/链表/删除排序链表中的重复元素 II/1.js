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
//使用假节点
var deleteDuplicates = function (head) {
    //排除极端情况，为空或者只有一个节点
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    //为的是cur针头能从头结点前一个位置开始穿针引线
    let cur = dummy;
    // 当 cur 的后面有至少两个结点时
    while (cur.next && cur.next.next) {
        //发现重复区域
        if (cur.next.val == cur.next.next.val) {
            let val = cur.next.val; //记录值
            while (cur.next && cur.next.val == val) {//注意这个判断顺序
                //删除重复节点
                cur.next = cur.next.next;
                //一直跳到值不为val的节点。这样正好完全跳过重复区域
            }
        } else {
            //不重复就正常遍历
            cur = cur.next;
        }
    }
    return dummy.next;
};