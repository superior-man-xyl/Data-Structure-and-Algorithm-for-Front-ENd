let year1=new Date('1990-3-1').getTime();
let year2=Date.now();
let result=year2-year1;
result=Math.floor(result/(360 * 24 * 3600 * 1000))//计算年份

console.log(year1,'++',year2,'+++',result);

function getAge(str){
    let year1=new Date(str).getTime();
    let year2=Date.now();
    return Math.floor((year2-year1)/(360 * 24 * 3600 * 1000));
}

console.log(getAge('1999-6-30'));//不准确

//或许可以根据字符串来判断
function getAge2(str){
    str=str.split('-');
    nowDay=new Date().toJSON().split('-')
    var result=nowDay[0]-str[0];
    if(str[1]>nowDay[1]&&str[2]>nowDay[2]){
        result--;
    }
    return result;
}
console.log(getAge2('1999-5-24'));