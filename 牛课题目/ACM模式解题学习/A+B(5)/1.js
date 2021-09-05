var num1 = readline();
while (line = readline()) {
    var lines = line.split(' ');
    var num = parseInt(lines.shift());
    var sum = 0;
    while (lines.length > 0) {
        sum = sum + parseInt(lines.pop());
    }
    console.log(sum);
}