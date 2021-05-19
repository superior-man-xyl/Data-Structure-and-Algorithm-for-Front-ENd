// 打标记法，这样有违背链表的定义
var hasCycle = function(head) {
    while(head){
        if(head.tag==true){
            return true;
        }
        head.tag=true;
        head=head.next;
    }
    return false;
};