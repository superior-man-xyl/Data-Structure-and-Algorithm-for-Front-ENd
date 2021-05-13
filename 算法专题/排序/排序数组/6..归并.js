//归并排序   使用递归的思想
var sortArray = function (nums) {
    const len = nums.length;
    if (len <= 1) {
        return nums;
        //如果只是一个值或空的数组就没必要排序了
        //也作为递归的最底层返回条件
    }
    //计算分割点
    const mid = Math.floor(nums.length / 2);
    // 递归分割左子数组，然后合并为有序数组
    const numsLeft = sortArray(nums.slice(0, mid));
    // 递归分割右子数组，然后合并为有序数组
    const numsRight = sortArray(nums.slice(mid));
    //合并两个有序数组
    nums = mergeArr(numsLeft, numsRight);
    return nums;
};
var mergeArr = function (arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = []; //初始化一个数组，用于装来自两个有序数组的值
    const len1 = arr1.length;
    const len2 = arr2.length;
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    //这里是遗留问题
    //两个数组的长度可能不一样，那么其中有个数组全部都加入到了arr容器中后
    //另一个更长的数组还有剩下的有序元素还未加入容器，则直接拼接该数组的剩余部分进容器
    if (i < len1) {
        return arr.concat(arr1.slice(i));
    } else {
        return arr.concat(arr2.slice(j));
    }
}