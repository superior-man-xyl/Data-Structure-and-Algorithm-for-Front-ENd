/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
      // 初始化两个指针的指向，初始化 nums1 尾部索引k
    let i=m-1;
    let j=n-1;
    let k=m+n-1;
    // 当两个数组都没遍历完时，指针同步移动
    while(i>=0&&j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[k]=nums1[i];
            i--;
            k--;
        }else{
            nums1[k]=nums2[j];
            j--;
            k--;
        }
    }
    // nums1 的有效部分和 nums2 并不一定是一样长的。
    // 我们还需要考虑其中一个提前到头的这种情况：
    // 所以有nums2 留下的情况，特殊处理一下
    while(j>=0){
        nums1[k]=nums2[j];
        j--;
        k--;
    }
};