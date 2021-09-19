let num = parseInt(read_line());

function ishuiwen(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
while (num > 0) {
    let lines = read_line().split('');
    if (lines.length <= 1) {
        console.log("NO");
        num--;
        continue;
    }
    lines.sort();
    if (ishuiwen(lines)) {
        console.log("NO");
    } else {
        console.log("YES");
    }
    num--;
}