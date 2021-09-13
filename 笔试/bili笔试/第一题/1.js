let arr = JSON.parse("[1,2,3,3,2,2,1,2]");
let nums = parseInt("1");
let map = new Map();
for(let value of arr){
    if(map.has(value)){
        map.set(value,map.get(value)+1);
    }else{
        map.set(value,1);
    }
}
let res = [...map].sort((a,b)=>{
    return b[1]- a[1] == 0 ? a[0]-b[0] : b[1]- a[1];
})
if(nums<=res.length&&nums>0){
    console.log(`${res[nums-1][0]} ${res[nums-1][1]}`)
}else{
    console.log('-1 -1');
}