function canBePalindromicString( str1 ) {
    // write code here
    let arr = str1.split("");
    let res = new Map();
    for(let i= 0;i<arr.length;i++){
        if(res.has(arr[i])){
            res.get(arr[i]).push(arr[i]);
        }else{
            res.set(arr[i],[arr[i]]);
        }
    }
    
}