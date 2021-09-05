while (line = readline()) {
    let lines = line.split(' ');
    lines.shift();
    let sum = 0;
    while (lines.length > 0) {
        sum = sum + parseInt(lines.pop());
    }
    console.log(sum);
}