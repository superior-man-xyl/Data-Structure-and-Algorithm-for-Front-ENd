var num = readline(); //读掉第一行没用的数据
while (line = readline()) {
    let arr = line.split(' ');
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    console.log(a + b);
}