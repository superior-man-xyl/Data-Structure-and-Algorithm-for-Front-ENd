var isPalindrome = function(x) {
    if(x<0||(x%10==0&&x!==0)){//直接去除不可能为回文数的情况
        return false;
    }
    let revertedNumber=0;
    while(x>revertedNumber){
        revertedNumber=revertedNumber*10+x%10;
        x=Math.floor(x/10);//因为没有负数，所以可以放心的适用floor，有负数时会出现问题，-0.1=》-1
    }
    //只计算一半的长度，最节约时间复杂度，后判断两边是否相等，考虑是奇位的情况
    return x===revertedNumber||Math.floor(revertedNumber/10)===x;
};