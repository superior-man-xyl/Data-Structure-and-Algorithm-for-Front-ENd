let arr = readline().split(' ');
let str = arr[0];
let num = arr[1];
arr = str.split("");
let res = [];
for(let i = 0; i<arr.length; i++){
    res.push([]);
    while(i<arr.length){
        if(parseInt(arr[i])== 0){
            i++;
            continue;
        }
        if(parseInt(arr[i])==1 && parseInt(arr[i-1])==0){
            res[res.length-1].push(i);
            i++;
        }
        if(parseInt(arr[i])==1 && parseInt(arr[i+1])==0){
            res[res.length-1].push(i-1);
            break;
        }
    }
}
let max = 0;
for(let key of res){
    let n = key[1]-key[0]+1;
    Math.max(max, n);
}
for(let i = 0;i<res.length; i++){
    
}