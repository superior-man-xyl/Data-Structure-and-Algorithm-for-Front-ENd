/**
 * @param {string} s
 * @return {string}
 */
//暴力法
 var longestPalindrome = function(s) {
    arr=s.split('');
    function isPalindrome(start,end){//用于验证是否为回文字符串
        while (start < end) {
            if (arr[start] !== arr[end]) {
                return false
            }
            start++;
            end--;
        }
        return true;
    }
    maxStr='';
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(isPalindrome(j,j+i)){
                maxStr=arr.slice(j,j+i+1).join('');
                break;
            }
        }
        if(maxStr.length<i){
            break;
        }
    }
    return maxStr;
};
console.log(longestPalindrome("babad"));