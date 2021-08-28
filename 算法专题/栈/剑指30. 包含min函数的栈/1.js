/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.X_stack = [];
    this.Min_stack = [Infinity]; //最小栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.X_stack.push(x);
    //普通栈的每个值都对应了一个最小值，当普通栈的值和最小栈中对应的值一样时。
    //这是就能保证最小栈中的最小值能随着普通栈里最小值的pop而一起pop
    this.Min_stack.push(Math.min(this.Min_stack[this.Min_stack.length - 1], x)); //将最小的压入
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    //一同入栈一同出栈
    this.X_stack.pop();
    this.Min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.X_stack[this.X_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.Min_stack[this.Min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */