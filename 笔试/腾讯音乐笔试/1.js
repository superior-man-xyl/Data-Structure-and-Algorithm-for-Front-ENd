function jz(num,k){
    let res = 0;
    while(num > 0){
        if(toString((num/k)).indexOf('.') !== -1){
            res++;
            break;
        }
        let res1 = num%k; 
        if(res1!==0){
            num = (num-res1)/k;
            continue;
        }
        num = num/k;
    }
    return res;
}
function minM(n, k) { //k是进制，n是1的个数
    // write code here
    if (n == 1) {
        return k;
    }
    res = k;
    bool = true;
    let num = 1;
    while (bool) {
        num += jz(res,k);
        // console.log(num);
        if(num == n){
            return res;
        }
        res++;
    }
}
console.log(minM(10,10));