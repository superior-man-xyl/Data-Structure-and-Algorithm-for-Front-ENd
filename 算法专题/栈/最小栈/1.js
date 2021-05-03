//做法一，仅能跑通的操作

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack=[];//初始化栈结构
};

/** 
 * @param {number} val 
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();//题目不要求有返回值，删除即可
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.stack||!this.stack.length){
        return
    }
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
//方法一
// MinStack.prototype.getMin = function() {
//     return Math.min(...this.stack);
// };

//方法二
MinStack.prototype.getMin = function() {
    let minValue=Infinity;
    const stack=this.stack;
    for(let i=0;i<stack.length;i++){
        if(stack[i]<minValue){
            minValue=stack[i];
        }
    }
    return minValue;
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */