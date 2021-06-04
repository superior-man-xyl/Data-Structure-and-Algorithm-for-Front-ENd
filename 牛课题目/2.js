function dateFormat(str){
    let now=new Date();
    console.log(now)
    now=now.toString();//记得这样能得到2021-5-31这样的格式
    console.log(now)
    let arr=now.split("-");
    str=str.replace("YYYY",arr[0]);
    str=str.replace("MM",arr[1]);
    str=str.replace("DD",arr[2]);
    return str;
  }
  console.log(dateFormat('YYYY/MM/DD'));