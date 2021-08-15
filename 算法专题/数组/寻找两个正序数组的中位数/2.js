//要求要 时间复杂度为log(m+n )
//二分查找法,具体理解参考官方解释
let findMedianSortedArrays = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    };
    let m = nums1.length,
        n = nums2.length,
        totalLeft = Math.ceil((m + n) / 2);// 因为从后往前

    let l = 0,
        r = m;
    while (l < r) {
        let i = Math.ceil((l + r) / 2);
        let j = totalLeft - i;
        if (nums1[i - 1] > nums2[j]) {
            r = i - 1;
        } else {
            l = i;
        }
    }

    let i = l,
        j = totalLeft - i; // 找到该分割线的下标
    let l1 = i == 0 ? -Infinity : nums1[i - 1],
    l2 = j == 0 ? -Infinity : nums2[j - 1],
    r1 = i == m ? Infinity : nums1[i],
    r2 = j == n ? Infinity : nums2[j];

    return ((m + n) & 1) ? Math.max(l1, l2) : (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
}
console.log(findMedianSortedArrays([1, 3], [2, 4]));