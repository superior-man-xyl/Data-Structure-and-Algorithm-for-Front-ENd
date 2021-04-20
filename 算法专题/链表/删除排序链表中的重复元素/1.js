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
 var deleteDuplicates = function(head) {
     // 设定 cur 指针，初始位置为链表第一个结点
     let cur=head;
     // 遍历链表
    while(cur!==null&&cur.next!==null){
        if(cur.val==cur.next.val){
            // 删除靠后的那个结点（去重）
            cur.next=cur.next.next;
        }else{
            //不重复指针向下走
            cur=cur.next;
        }
    }
    return head;
};