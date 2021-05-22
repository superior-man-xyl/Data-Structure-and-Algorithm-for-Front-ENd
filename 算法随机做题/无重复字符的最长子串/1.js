/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    s=s.split('');
    // console.log(s,'+++');
    let max=0;
    let Arr=[];
    for(let i=0;i<s.length;i++){
        let index=Arr.indexOf(s[i])
        if(index>=0){
            Arr=[...Arr.slice(index+1),s[i]];
        }else{
            Arr.push(s[i]);
        }
        let len=Arr.length;
        if(max<len){
            max=len;
        }
    }
    return max
};
console.log(lengthOfLongestSubstring(" "));