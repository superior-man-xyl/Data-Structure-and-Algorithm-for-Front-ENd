/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//不讲武德的做法

 var hasCycle = function(head) {
    try{
        JSON.stringify(head);
        return false;
    }catch{
        return true;
    }
};