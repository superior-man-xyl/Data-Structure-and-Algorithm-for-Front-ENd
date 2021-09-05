while (line = readline()) {
    let lines = line.split(' ');
    let sum = 0;
    while (lines.length > 0) {
        sum = sum + parseInt(lines.pop());
    }
    console.log(sum);
}