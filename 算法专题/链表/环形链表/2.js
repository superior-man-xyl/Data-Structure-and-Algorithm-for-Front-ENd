//使用快慢指针

var hasCycle = function(head) {
    var cur1=head;
    var cur2=head;
   while(cur1&&cur2&&cur2.next){//防止null.next报错
       cur1=cur1.next;
       cur2=cur2.next.next;
       if(cur1==cur2){
            return true;
       }
   }
   return false;
};