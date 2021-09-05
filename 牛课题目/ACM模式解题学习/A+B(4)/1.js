while (line = readline()) {
    var arr = line.split(' ');
    var num = parseInt(arr.shift());
    if (num === 0) {
        break;
    }
    var sum = 0;
    while (arr.length > 0) {
        sum = sum + parseInt(arr.pop());
    }
    console.log(sum);
}