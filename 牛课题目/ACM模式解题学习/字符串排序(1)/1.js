readline();
while (line = readline()) {
    let lines = line.split(' ');
    lines = lines.sort().join(' ');
    console.log(lines);
}