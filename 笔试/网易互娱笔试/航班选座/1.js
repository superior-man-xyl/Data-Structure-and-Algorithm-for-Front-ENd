let arr = readline().split(' ');
let n = parseInt(arr[0]);
let c = parseInt(arr[1]);
let arr1 = [];
while (n > 0) {
    arr1.push(readline().replace('|_|', '').split(''));
    n--;
}
let res = [];
for (let i = 0; i < arr1.length; i++) {
    let arr2 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] == '.') {
            res.push([i,j]);
        }
    }
}
let nums = 0;
for(let i =0; i<res.length;i++){
    let n1 = res[i][0];
    let n2 = res[i][1];
    let j =i+1;
    while(j<res.length){
        let k1 = res[j][0];
        let k2 = res[j][1];
        if((k1!==n1-1&&k2!==n2-1)&&(k1!==n1-1&&k2!==n2)&&(k1!==n1-1&&k2!==n2+1)&&(k1!==n1&&k2!==n2-1)&&(k1!==n1&&k2!==n2+1)&&(k1!==n1+1&&k2!==n2-1)&&((k1!==n1+1&&k2!==n2+1))||((k1!==n1+1&&k2!==n2))){
            console.log("SUCCESS")
        }
    }
    console.log("FAILED")
}

[n1,n2]

[n1-1,n2-1]
[n1-1,n2]
[n1-1,n2+1]
[n1,n2-1]
[n1,n2+1]
[n1+1,n2-1]
[n1+1,n2]
[n1+1,n2+1]