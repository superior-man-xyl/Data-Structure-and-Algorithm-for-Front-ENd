let arr1 = read_line().split(" ");
let num = arr1[0];
let k = arr1[1];
let blueArr = [];
let redArr = [];
while(num>0){
    let lines = read_line().split(" ");
     if(parseInt(lines[1])==0){
        redArr.push(lines[0]);
     }else{
         blueArr.push(lines[0]);
     }
     num--;
}
let ways=0;
let bluelen = blueArr.length;
let redlen = redArr.length;
function sum(arr){
    return arr.reduce((a,b)=>{
        return a+b;
    })
}
if(redlen==0){
    let i=0;
    let arr = [];
    for(let j =0;j<blueArr.length;j++){
        let cur = blueArr[j];
        if(arr[arr.length-1].length>0){
            arr.push([]);
        }
        while(i<=k){
            for(let value of blueArr){
                if((cur+value)%3==0){
                    arr[arr.length-1].push(value);
                    ways++;
                }
            }
        }
    }
}
if(bluelen==0){
    let i=0;
    let arr = [];
    for(let j =0;j<redArr.length;j++){
        let cur = redArr[j];
        if(arr[arr.length-1].length>0){
            arr.push([]);
        }
        while(i<=k){
            for(let value of redArr){
                if((cur+value)%3==0){
                    arr[arr.length-1].push(value);
                    ways++;
                }
            }
        }
    }
}
console.log(ways);