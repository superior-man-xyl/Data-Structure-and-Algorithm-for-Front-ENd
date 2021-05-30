//使用hashMap 96ms
var findRepeatNumber = function (nums) {
    let map=new Map();
    for(let i of nums){
        if(map.has(i)){
            return i;
        }
        map.set(i,true)
    }
};
console.log(findRepeatNumber([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));