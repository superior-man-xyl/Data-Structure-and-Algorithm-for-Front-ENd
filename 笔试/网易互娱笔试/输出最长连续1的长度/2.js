// 成功AC
let arr = ("0011001110110001111 3").split(' ');
let str = arr[0];
let num = parseInt(arr[1]);
arr = str.split("");
let max = 0;
if (arr.length <= num) {
    console.log(arr.length);
} else {
    for (let i = 0; i < arr.length; i++) {
        let cur = 0;
        if (parseInt(arr[i]) == 1) {
            continue;
        }
        let j = i;
        let arr1 = [...arr];
        while (cur < num && j < arr.length) {
            if (parseInt(arr1[j]) == 0) {
                arr1[j] = '1';
                cur++;
            }
            j++;
        }
        let res = arr1.join('').split(/0+/ig);
        for (let key of res) {
            if (key.length > max) {
                max = key.length;
            }
        }
    }
    console.log(max);
}