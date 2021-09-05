let k=0;
let arr2=[0,0,0,0,]
for(let i = 0;i<arr2.length;i++){
    if(k===3){
       arr2.splice(i,0,',');
       i++;
        k=0;
    }
    k++;
}
console.log(arr2.reverse().join(''))
