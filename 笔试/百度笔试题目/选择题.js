let line=['1','2']
line.push(line.push(['3','4']));// push返回的是数组长度
console.log(line,line.length);// [ '1', '2', [ '3', '4' ], 3 ] 4


let line=['1','2']
line.push(['3','4'])
line.push(line);
console.log(line,line.length);// <ref *1> [ '1', '2', [ '3', '4' ], [Circular *1] ] 4
