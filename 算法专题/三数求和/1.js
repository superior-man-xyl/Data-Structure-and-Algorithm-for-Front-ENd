/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
思路：
1. 根据双指针法来进行操作，先排序
2. 选择一个数（最左）为基准值，不变
3. 左指针位于第二位，右指针位于最后一位
4. 将左指针指向元素与右指针指向元素相加再与基准值相加
小于1就证明左指针所指太小，就向右移，大于1右指针所指太大，向左移动一位
5，基准值与上一个相同的跳过，指针值相同的也跳过

*/
 var threeSum = function(nums) {
     const res=[];
     const len=nums.length;
     nums=nums.sort((a,b)=>{//从小到大排序
         return a-b;
     })
    for(let i=0;i<len-2;i++){
        //如果基准值都大于0了，后面就不可能在和为0了，直接结束
        if(i>0&&nums[i]>0){
            break;
        }
        let j=i+1;//定义左指针
        let k=len-1;//定义右指针
        if(i>0&&nums[i]==nums[i-1]){//防止第一次被跳过
            continue;//为基准值跳过重复，到下一次循环
        }
        while(j<k){//判断两个指针是否已经跑到一起
            if(nums[j]+nums[k]+nums[i]==0){
                res.push([nums[i],nums[j],nums[k]]);
                j++;
                //跳过指针值重复项，下面同理
                while(j<k&&nums[j]==nums[j-1]){
                    j++;
                }
                k--;
                while(j<k&&nums[k]==nums[k+1]){
                    k--;
                }
            }
            else if(nums[j]+nums[k]+nums[i]<0){
                j++;
                while(j<k&&nums[j]==nums[j-1]){
                    j++;
                }
            }
            else{
                k--;
                while(j<k&&nums[k]==nums[k+1]){
                    k--;
                }
            }
            
        }
    }
    return res;
};