function find_kth(arr1, arr2, k) {
    // write code here
    let arr = [];
    let i = 0;
    let j = 0;
    let cur = 0;
    while (cur <= k && i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        if(arr1[i]>arr2[j]){
            arr.push(arr2[j]);
            j++;
        }
        cur++;
    }
    if (cur <= k && i < arr1.length) {
        arr = arr.concat(arr1.slice(i));
    } else if (cur <= k && j < arr2.length) {
        arr = arr.concat(arr2.slice(j));
    }
    return arr[k-1];
}
console.log(find_kth([1,2,3],[4,5,6],4));