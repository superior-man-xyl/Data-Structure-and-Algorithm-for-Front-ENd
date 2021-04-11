//最简易版
var isPalindrome = function(x) {
    let y=x.toString().split("").reverse().join("");
    if(x==y){
        return true;
    }else{
        return false;
    }
};