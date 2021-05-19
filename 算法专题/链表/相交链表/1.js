var getIntersectionNode = function(headA, headB) {
   if(headA==null||headB==null){
    return null;
   }
   let pa=headA;
   let pb=headB;
   while(pa!==pb){
       //不会陷入死循环，因为最后都是null节点，是相等的
    if(pa!==null){
        pa=pa.next;
    }else{
        pa=headB
    }
    if(pb!==null){
        pb=pb.next
    }else{
        pb=headA;
    }
   }
   return pa;
};