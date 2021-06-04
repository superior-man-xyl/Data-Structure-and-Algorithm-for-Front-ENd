function levelOrder(root){
    const result=[];
    if(!root){
        return result;
    }
    const queue=[];//做一个队列
    queue.push(root);
    while(queue.length>0){
        let currentLevelSize=queue.length;
        result.push([])
        for(let i=0;i<=currentLevelSize;i++){
            let node=queue.shift();
            result[result.length-1].push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return result;
}