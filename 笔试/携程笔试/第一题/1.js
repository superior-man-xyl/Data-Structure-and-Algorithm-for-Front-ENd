// 年：[2000,2021]
// 月：[01,12]
// 日：[01,20]
// 时：[00,23]
// 分：[00,59]
// 秒：[00,59]
// console.log(parseInt(00));//0
let num = 3;
while(num>0){
    let line = "20091119055555"
    if(line.length!==14){//长度判断
        console.log("Wrong","1");
        num--;
        continue;
    }
    let lines = line.split("");
    let y = lines.slice(0,4);
    let y1 = parseInt(y.join(''));
    console.log(y1,typeof y1,y);
    if(y1<2000||y1>2021){
        console.log("Wrong","2");
        num--;
        continue;
    }
    let m = lines.slice(4,6);
    let m2 = m.join('');
    let m1 = parseInt(m2);
    if(m1<1||m1>12){
        console.log("Wrong","3");
        num--;
        continue;
    }
    let d = lines.slice(6,8);
    let d2 = d.join('');
    let d1 = parseInt(d2);
    if(d1<1||d1>20){
        console.log("Wrong","4");
        num--;
        continue;
    }
    let h = lines.slice(8,10);
    let h2 = h.join('');
    let h1 = parseInt(h2);
    if(h1<0||h1>23){
        console.log("Wrong","5");
        num--;
        continue;
    }
    let min = lines.slice(10,12);
    let min2 = min.join('');
    let min1 = parseInt(min2);
    if(min1<0||min1>59){
        console.log("Wrong","6");
        num--;
        continue;
    }
    let s = lines.slice(12);
    let s2 = s.join('');
    let s1 = parseInt(s2);
    if(s1<0||s1>59){
        console.log("Wrong","7");
        num--;
        continue;
    }
    num--;
    console.log(`${y1}.${m2}.${d2} ${h2}:${min2}:${s2}`);
}