/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
     if(head===null){
        return true
     }
    let satck=[];
    let cur=head;
    let cur1=head
    while(cur){
        satck.push(cur);
        cur=cur.next;
    }
    while(cur1){
        if(satck.pop().val!==cur1.val){
            return false;
        }
        cur1=cur1.next;
    }
    return true;
};