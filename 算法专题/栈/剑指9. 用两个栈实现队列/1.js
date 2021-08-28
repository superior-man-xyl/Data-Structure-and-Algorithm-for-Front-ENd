var CQueue = function () {
    //创建两个栈
    this.stackA = [];
    this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stackB.length) {
        return this.stackB.pop();
    } else {
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        if (!this.stackB.length) {
            return -1;
        }
        return this.stackB.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */