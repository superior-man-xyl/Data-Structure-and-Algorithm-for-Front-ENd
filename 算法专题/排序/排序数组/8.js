//快速排序  好理解版
function sortArray(array) {
    if (array.length <=1) {
        //少于两个元素没必要排序
      return array;
    }
    const target = array[0];//基准值为最左那个
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < target) {
        left.push(array[i]);//比基准值小的放在左边
      } else {
        right.push(array[i]);//比基准值大的放在右边
      }
    }
    //递归
    return sortArray(left).concat([target], sortArray(right));
  }