function RadixSort(arr) {
    let maxDigit = Math.max(...arr).toString().length;
    let mod = 10,
        dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {//有多少位就多少次
        let count = [];//用于初始化装分组的数组，和重置为空数组
        for (let j = 0; j < arr.length; j++) {//为数组里的值分组
            let num = Math.floor((arr[j] % mod) / dev);
            if (count[num] == null) {
                count[num] = [];
                count[num].push(arr[j])
            } else {
                count[num].push(arr[j])
            }
        }
        arr = count.flat(Infinity);//扁平化
    }
    return arr;
}
console.log(RadixSort([11, 221, 3, 69, 178, 1112, 54]));