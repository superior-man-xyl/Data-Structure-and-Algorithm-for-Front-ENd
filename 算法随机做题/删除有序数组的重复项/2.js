//双指针写法，优化解题

var removeDuplicates = function(nums) {
    let len=nums.length;
    if(len===0){
        return 0;
    }
    let i=1,j=1;
    //i指针用于一直向右比较，找到新的元素
    //i指针找到新元素后就放到j的位置，j++
    //等于要把数组前面摆放成不重复数组，
    //后面舍弃多余元素，即每种元素留一个放前面
    while(i<len){
        if(nums[i]!==nums[i-1]){
            nums[j]=nums[i];
            j++;
        }
        i++;
    }
    nums.length=j;
    return j;
};