let time = new Date('2021-09-13 00:00:00');
let time1 = Date.parse(time);
function time2(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
}
let arr = "+5d".split(' ');
for(let value of arr){
    let cur = value.split('');
    if(cur[0] === '+'){
        if(cur[2] === 'W' ){
            time1 += parseInt(cur[1])*1000*60*60*24*7;
        }else if(cur[2] === 'd'){
            time1 += parseInt(cur[1])*1000*60*60*24;
        }else if(cur[2] === 'h'){
            time1 += parseInt(cur[1])*1000*60*60;
        }else if(cur[2] === 'm'){
            time1 += parseInt(cur[1])*1000*60;
        }else if(cur[2] === 's'){
            time1 += parseInt(cur[1])*1000;
        }
    }else if(cur[0] === '-'){
        if(cur[2] === 'W' ){
            time1 -= parseInt(cur[1])*1000*60*60*24*7;
        }else if(cur[2] === 'd'){
            time1 -= parseInt(cur[1])*1000*60*60*24;
        }else if(cur[2] === 'h'){
            time1 -= parseInt(cur[1])*1000*60*60;
        }else if(cur[2] === 'm'){
            time1 -= parseInt(cur[1])*1000*60;
        }else if(cur[2] === 's'){
            time1 -= parseInt(cur[1])*1000;
        }
    }
}
console.log(time2(time1));