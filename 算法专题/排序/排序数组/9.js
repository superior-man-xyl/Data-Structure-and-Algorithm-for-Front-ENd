function sortArray(array, start, end) {
    if (end - start < 1) {
      return;//递归返回条件
    }
    const target = array[start];//基准值为最左边
    //初始化左（l）右（r）指针
    let l = start;
    let r = end;
    while (l < r) {
        //满足左指针大于右指针，并且遍历的值大于基准值
      while (l < r && array[r] >= target) {
        r--;//移动
      }//跳出说明找到了
      array[l] = array[r];
      //满足右指针大于左指针，并且遍历的值小于基准值
      while (l < r && array[l] < target) {
        l++;//移动
      }//跳出说明找到了
      array[r] = array[l];
    }
    //
    array[r] = target;
    sortArray(array, start, r - 1);
    sortArray(array, r + 1, end);
    return array;
  }