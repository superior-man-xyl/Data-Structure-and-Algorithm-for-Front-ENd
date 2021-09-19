let map = {
    '0':['-'],
    '1':[' '],
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z'],
}
    let lines = "2--2-2---222--2".split('');
    let res = [];
    res.push([lines.shift()]);
    while(lines.length>0){
        let line = lines.shift();
        if(res[res.length-1][0]!== line){
            res.push([line]);
        }else{
            res[res.length-1].push(line);
        }
    }
    let result = [];
    for(let key of res){
        let key1 = key[0];
        let len = key.length-1
        result.push((map[key1])[len]);
    }
    console.log(result.join(''));