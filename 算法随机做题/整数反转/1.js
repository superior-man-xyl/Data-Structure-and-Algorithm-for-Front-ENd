var reverse = function(x) {
    let y=0;
    let tem=0;
    while(x){
        y=y*10+x%10;
        if(y>Math.pow(2,31)-1||y<Math.pow(-2,31)){
            return 0
        }
        tem=(x/10)
        x=~~(tem);//~是按位取反的意思，计算机里面处理二进制数据时候的非，
        // ~~就是再转回来，利用两个按位取反的符号，进行类型的转换，转换成数字符号。
        //可以简单理解位取整
        console.log(tem,x);
    }
    return y;
};
console.log(reverse(-123));